from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from users.models import User


class TestProfileViews(APITestCase):
    def setUp(self):
        self.test_user = User.objects.create_user(
            username='user', email='user@test.com', password='password'
        )

        self.client = APIClient()
        self.client.force_authenticate(user=self.test_user)

    def test_retrieve_profile(self):
        """
        Test an authenticated user can retrieve their profile info
        """
        res = self.client.get(f'/api/users/{self.test_user.id}/profile/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data['user'], self.test_user.id)

    def test_update_profile(self):
        """
        Test a profile can update their details
        """
        test_update = {
            'description': 'I am a test.',
            'education': 'Masters',
            'desired_job': 'Test Runner'
        }

        res = self.client.patch(f'/api/users/{self.test_user.id}/profile/', test_update)

        self.assertEqual(res.status_code, status.HTTP_200_OK)

        self.assertEqual(res.data["description"], test_update["description"])
        self.assertEqual(res.data["education"], test_update["education"])
        self.assertEqual(res.data["desired_job"], test_update["desired_job"])
