from django.conf import settings
from django.utils.deconstruct import deconstructible
from careers.storage_backends import LocalMediaStorage, PrivateMediaStorage
import os

def select_storage():
    return LocalMediaStorage() if settings.DEBUG else PrivateMediaStorage()

# https://stackoverflow.com/questions/15140942/django-imagefield-change-file-name-on-upload
@deconstructible
class Rename(object):

    def __init__(self, path):
        self.sub_path = path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        # get filename
        filename = '{}.{}'.format(instance.pk, ext)
        # return the whole path to the file
        return os.path.join(self.sub_path, filename)