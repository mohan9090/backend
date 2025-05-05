"""
URL configuration for myapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from blog.views import HomeView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),
    path('', HomeView.as_view(), name='home'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('create-course/', views.create_course, name='create_course'),
    path('enroll/<int:course_id>/', views.enroll_course, name='enroll_course'),
    path('courses/', views.course_list, name='course_list'),
    path('api/register/', views.register, name='register'),
    path('api/login/', views.login, name='login'),
    path('api/google-login/', views.google_login, name='myapp_google_login'),
]
