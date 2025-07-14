from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PostViewSet, SurveyQuestionViewSet, TestimonialViewSet, CategoryListView,
    ContactCreateView, SurveySubmissionCreateView, WorkViewSet
)

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'survey/questions', SurveyQuestionViewSet, basename='survey-question')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'works', WorkViewSet, basename='work')


urlpatterns = [
    path('', include(router.urls)),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('contacts/', ContactCreateView.as_view(), name='contact-create'),
    path('survey/submit/', SurveySubmissionCreateView.as_view(), name='survey-submit'),
] 