from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class TestAuthViews(APITestCase):
    def test_create_user(self):
        """
        Test a user can be registered
        """
        test_user = {
            'username':'test_user', 
            'email':'user@test.com', 
            'password':'passwprd'
        }

        res = self.client.post(reverse('user-register'), test_user)
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertEqual(res.data["username"], test_user["username"])