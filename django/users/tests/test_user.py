from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from users.models import User

class TestUserViews(APITestCase):
    def setUp(self):
        self.test_user = User.objects.create_user(
            username='user', email='user@test.com', password='password'
        )

        self.client = APIClient()
        self.client.force_authenticate(user=self.test_user)
    
    def test_list_users(self):
        """
        Test an authenticated user can list users
        """
        res = self.client.get('/api/users/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 1)

    def test_retrieve_user(self):
        """
        Test an authenticated user can retrieve their information
        """
        print(self.test_user.id)
        res = self.client.get(f'/api/users/{self.test_user.id}/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)   
        self.assertEqual(res.data['username'], 'user')

    def test_update_user(self):
        """
        Test a user can update their details
        """
        test_update = {
            'first_name': 'Test',
            'last_name': 'McTestFace',
        }

        res = self.client.patch(f'/api/users/{self.test_user.id}/', test_update)
        
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        
        self.assertEqual(res.data["first_name"], test_update["first_name"])
        self.assertEqual(res.data["last_name"], test_update["last_name"])
