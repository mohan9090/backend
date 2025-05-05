import json
from django.test import TestCase, Client
from django.urls import reverse
from unittest.mock import patch
from django.contrib.auth import get_user_model

User = get_user_model()

class GoogleLoginTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.url = reverse('myapp_google_login')  # Updated to match URL name in myapp/urls.py

    @patch('google.oauth2.id_token.verify_oauth2_token')
    def test_google_login_success_existing_user(self, mock_verify):
        mock_verify.return_value = {
            'iss': 'accounts.google.com',
            'email': 'existinguser@example.com'
        }
        user = User.objects.create_user(username='existinguser', email='existinguser@example.com')
        user.set_unusable_password()
        user.save()

        response = self.client.post(self.url, data=json.dumps({'token': 'valid_token'}), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn('access', data)
        self.assertIn('refresh', data)
        self.assertEqual(data.get('role', 'student'), getattr(user, 'role', 'student'))

    @patch('google.oauth2.id_token.verify_oauth2_token')
    def test_google_login_success_new_user(self, mock_verify):
        mock_verify.return_value = {
            'iss': 'accounts.google.com',
            'email': 'newuser@example.com'
        }

        response = self.client.post(self.url, data=json.dumps({'token': 'valid_token'}), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn('access', data)
        self.assertIn('refresh', data)
        user = User.objects.get(email='newuser@example.com')
        self.assertEqual(data.get('role', 'student'), getattr(user, 'role', 'student'))

    def test_google_login_missing_token(self):
        response = self.client.post(self.url, data=json.dumps({}), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = response.json()
        self.assertIn('detail', data)  # Adjusted to match 'detail' key in response JSON

    @patch('google.oauth2.id_token.verify_oauth2_token')
    def test_google_login_invalid_token(self, mock_verify):
        mock_verify.side_effect = ValueError('Invalid token')

        response = self.client.post(self.url, data=json.dumps({'token': 'invalid_token'}), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = response.json()
        self.assertIn('detail', data)  # Adjusted to match 'detail' key in response JSON

    def test_google_login_wrong_method(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 405)
        # Method Not Allowed does not return JSON error message
