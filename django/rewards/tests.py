from django.test.testcases import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Reward
from rest_framework.test import APIClient
from users.models import User

class TestRewardViews(APITestCase):
    fixtures = ["rewards.json"]
    # @classmethod

    def setUp(self):
        admin = User.objects.create_superuser(
            username='admin', email='admin@test.com', password='adminpass'
        )
        self.client.force_authenticate(user=admin)

    def test_list_rewards(self):
        """
        Test an authenticated user can retrieve the rewards page
        """
        user = User.objects.create_user(
            username='test', email='test@test.com', password='testpass'
        )

        self.client = APIClient()
        self.client.force_authenticate(user=user)

        res = self.client.get(reverse('reward-list'))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data), 5)

    def test_create_reward(self):
        """
        Test an admin user can create a rewards
        """

        test_reward = {
            'title': 'TestReward',
            'description': 'Test description',
            'point_change': 10,
            'one_time': False
        }

        res = self.client.post(reverse('reward-list'), test_reward)
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertEqual(res.data["title"], test_reward["title"])

    def test_update_reward(self):
        """
        Test an admin user can update a reward
        """

        test_reward = {
            'description': 'A new descriptions',
            'point_change': 20,
        }

        res = self.client.patch(reverse('reward-detail', args=(8,)), test_reward)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        
        self.assertEqual(res.data["description"], test_reward["description"])
        self.assertEqual(res.data["point_change"], test_reward["point_change"])

    def test_delete_reward(self):
        """
        Test an admin user can delete a reward
        """

        res = self.client.delete(reverse('reward-detail', args=(8,)))
        self.assertEqual(res.status_code, status.HTTP_204_NO_CONTENT)
        
        res = self.client.get(reverse('reward-list'))
        self.assertEqual(len(res.data), 4)
        

class TestRewardModel(TestCase):
    def test_model_print(self):
        reward = Reward.objects.create(title="Test")
        self.assertEqual(str(reward), "Test")