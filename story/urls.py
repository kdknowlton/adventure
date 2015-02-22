from django.conf.urls import patterns, include, url
from rest_framework import routers
from story import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'stories', views.StoryViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'choices', views.ChoiceViewSet)


urlpatterns = patterns('',
    url(r'^$', 'story.views.index'),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)
