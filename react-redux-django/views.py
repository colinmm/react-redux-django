from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.template import Template
import datetime
import os, subprocess, shutil, sys, json
# from lxml import etree, objectify
# import ldap
import urllib2
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from django.http import JsonResponse

from django.core import serializers

def main(request):
    return render(request, 'home.html')

