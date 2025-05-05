from django.shortcuts import render, redirect
from django.http import HttpResponseForbidden, JsonResponse
from .models import Course
from django.contrib.auth import authenticate, get_user_model
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken
import json
import google.auth.transport.requests
import google.oauth2.id_token
from django.conf import settings
import logging

User = get_user_model()
logger = logging.getLogger(__name__)

def create_course(request):
    if not request.user.is_authenticated:
        return redirect('login')

    if request.user.role != 'admin':
        return HttpResponseForbidden("Only admins can create courses.")

    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        Course.objects.create(title=title, description=description, created_by=request.user)
        return redirect('course_list')

    return render(request, 'create_course.html')

def enroll_course(request, course_id):
    if not request.user.is_authenticated:
        return redirect('login')

    if request.user.role != 'student':
        return HttpResponseForbidden("Only students can enroll.")

    return render(request, 'enroll_success.html')

def course_list(request):
    courses = Course.objects.all()
    return render(request, 'course_list.html', {'courses': courses})

@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            password2 = data.get('password2')
            role = data.get('role')

            if not all([username, email, password, password2, role]):
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            if password != password2:
                return JsonResponse({'error': 'Passwords do not match.'}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Username already exists.'}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already exists.'}, status=400)

            is_staff = False
            is_superuser = False
            if role == 'admin':
                is_staff = True
                is_superuser = True

            user = User.objects.create_user(username=username, email=email, password=password, is_staff=is_staff, is_superuser=is_superuser)
            user.role = role
            user.save()

            return JsonResponse({'message': 'User registered successfully!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Only POST method allowed'}, status=400)

@csrf_exempt
def google_login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            token = data.get('token')

            if not token:
                return JsonResponse({'detail': 'No token provided'}, status=400)

            request_adapter = google.auth.transport.requests.Request()
            id_info = google.oauth2.id_token.verify_oauth2_token(token, request_adapter, settings.GOOGLE_OAUTH2_CLIENT_ID)

            if id_info['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                return JsonResponse({'detail': 'Wrong issuer.'}, status=400)

            email = id_info.get('email')
            if not email:
                return JsonResponse({'detail': 'Email not available in token.'}, status=400)

            user, created = User.objects.get_or_create(email=email, defaults={
                'username': email.split('@')[0],
                'role': 'student',
                'is_active': True,
            })

            if created:
                user.set_unusable_password()
                user.save()

            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)

            role = getattr(user, 'role', 'student')

            return JsonResponse({
                'access': access_token,
                'refresh': refresh_token,
                'role': role,
            })
        except ValueError:
            return JsonResponse({'detail': 'Invalid token.'}, status=400)
        except Exception as e:
            return JsonResponse({'detail': str(e)}, status=500)
    else:
        return JsonResponse({'detail': 'Only POST method allowed'}, status=405)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username_or_email = data.get('username')
            password = data.get('password')

            logger.info(f"Login attempt with username/email: {username_or_email}")

            if not username_or_email or not password:
                logger.warning("Username or password missing in login request")
                return JsonResponse({'error': 'Username and password are required.'}, status=400)

            user = None
            if '@' in username_or_email:
                try:
                    user_obj = User.objects.get(email=username_or_email)
                    username = user_obj.username
                    logger.info(f"User found by email: {username}")
                    user = authenticate(username=username, password=password)
                    if user is None:
                        logger.warning(f"Authentication failed for user found by email: {username}")
                except User.DoesNotExist:
                    user = None
                    logger.warning(f"User with email {username_or_email} does not exist")
            else:
                user = authenticate(username=username_or_email, password=password)
                if user:
                    logger.info(f"User authenticated by username: {username_or_email}")
                else:
                    logger.warning(f"Authentication failed for username: {username_or_email}")

            if user is not None:
                if not user.is_active:
                    logger.warning(f"Inactive user attempted login: {user.username}")
                    return JsonResponse({'error': 'User account is inactive.'}, status=403)

                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                refresh_token = str(refresh)

                role = getattr(user, 'role', 'student')

                return JsonResponse({
                    'access': access_token,
                    'refresh': refresh_token,
                    'role': role,
                })
            else:
                logger.warning("Invalid credentials provided")
                return JsonResponse({'error': 'Invalid credentials.'}, status=401)
        except Exception as e:
            logger.error(f"Exception during login: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Only POST method allowed'}, status=400)
