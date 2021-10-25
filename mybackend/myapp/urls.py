from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('users/<int:id>/', views.UserView.as_view(), name='user_detail'),
    path('blogs/', views.BlogView.as_view(), name='user_blogs'),
]