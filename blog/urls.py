from django.urls import path
from .views import (
    UserRegistrationView,
    UserLoginView,
    UserLogoutView,
    PasswordResetView,
    PasswordResetConfirmView,
    GoogleLoginView,
)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', UserLogoutView.as_view(), name='logout'),
    path('reset-password/', PasswordResetView.as_view(), name='reset-password'),
    path('reset-password-confirm/<int:uid>/<str:token>/', PasswordResetConfirmView.as_view(), name='reset-password-confirm'),
    path('google-login/', GoogleLoginView.as_view(), name='google-login'),
]
