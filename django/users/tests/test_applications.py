from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from users.models import User


class TestApplicationViews(APITestCase):
    fixtures = ['users.json']

    def setUp(self):
        self.test_user = User.objects.get(pk=1)
        self.client = APIClient()
        self.client.force_authenticate(user=self.test_user)

    def test_list_applications(self):
        """
        Test an authenticated user can list their applications
        """
        res = self.client.get(f'/api/users/{self.test_user.id}/applications/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 1)

    def test_create_application(self):
        """
        Test a user can create an applications
        """
        test_application = {
            'job_title':'Test Runner', 
            'company':'Testing Co', 
            'description':'Gotta run tests!',
            'url': 'http://unittest.com'
        }

        res = self.client.post(f'/api/users/{self.test_user.id}/applications/', test_application)
     
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertEqual(res.data["job_title"], test_application["job_title"])

        

    def test_retrieve_application(self):
        """
        Test an authenticated user can retrieve application info
        """
        res = self.client.get(f'/api/users/{self.test_user.id}/applications/1/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data['job_title'], "Noodle Farmer")

    def test_update_application(self):
        """
        Test a user can update their application status
        """
        test_update = {
            'saved': True,
            'applied': True,
        }

        res = self.client.patch(
            f'/api/users/{self.test_user.id}/applications/1/', test_update)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data["saved"], test_update["saved"])
        self.assertEqual(res.data["applied"], test_update["applied"])
        self.assertEqual(res.data["job_title"], "Noodle Farmer")
