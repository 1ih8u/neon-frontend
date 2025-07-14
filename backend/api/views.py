from rest_framework import generics, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (
    Contact, Category, Post, 
    Question, SurveySubmission, Testimonial, Work
)
from .serializers import (
    ContactSerializer, CategorySerializer, PostSerializer,
    QuestionSerializer, SurveySubmissionSerializer, TestimonialSerializer,
    WorkSerializer
)
from rest_framework.parsers import MultiPartParser, FormParser

class WorkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Work.objects.all() # type: ignore
    serializer_class = WorkSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all() # type: ignore
    serializer_class = ContactSerializer
    parser_classes = (MultiPartParser, FormParser)

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all() # type: ignore
    serializer_class = CategorySerializer

# ViewSet для постов блога
class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all().order_by('-created_at') # type: ignore
    serializer_class = PostSerializer 
    lookup_field = 'slug'

# ViewSet'ы для опросника
class SurveyQuestionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Question.objects.all() # type: ignore
    serializer_class = QuestionSerializer

    @action(detail=False, methods=['get'])
    def start(self, request):
        try:
            first_question = Question.objects.get(is_first=True) # type: ignore
            serializer = self.get_serializer(first_question)
            return Response(serializer.data)
        except Question.DoesNotExist: # type: ignore
            return Response({'error': 'Стартовый вопрос не найден.'}, status=status.HTTP_404_NOT_FOUND)

class SurveySubmissionCreateView(generics.CreateAPIView):
    queryset = SurveySubmission.objects.all() # type: ignore
    serializer_class = SurveySubmissionSerializer 

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all().order_by('order') # type: ignore
    serializer_class = TestimonialSerializer 