from django.conf.urls import include, url
from django.contrib import admin
from django.views import generic
import views
import data

urlpatterns = [
	url(r'^/$', views.main),
    url(r'^app$', views.main),  
    url(r'^ajax/data$', data.main),
]