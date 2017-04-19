from django.conf.urls import include, url
from django.contrib import admin
from django.views import generic
import views

urlpatterns = [
	url(r'^/$', views.main),
]