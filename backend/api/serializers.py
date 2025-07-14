from rest_framework import serializers
from .models import (
    Contact, Category, Work, WorkImage, 
    Post, PostImage, 
    Question, Answer, SurveySubmission, Testimonial
)

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'phone', 'email', 'message', 'contact_preference', 'attachment', 'created_at')
        read_only_fields = ('created_at',)

class WorkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkImage
        fields = ('id', 'image')

class WorkSerializer(serializers.ModelSerializer):
    images = WorkImageSerializer(many=True, read_only=True)

    class Meta:
        model = Work
        fields = ('id', 'title', 'description', 'price', 'images')

class CategorySerializer(serializers.ModelSerializer):
    works = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'works')

    def get_works(self, obj):
        # Явно получаем все работы для данной категории
        all_works = Work.objects.filter(category=obj) # type: ignore
        serializer = WorkSerializer(all_works, many=True, read_only=True, context=self.context)
        return serializer.data


# Сериализаторы для блога
class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ('id', 'image')

class PostSerializer(serializers.ModelSerializer):
    images = PostImageSerializer(many=True, read_only=True)
    # Переименовываем поля для соответствия с фронтендом
    shortDescription = serializers.CharField(source='short_description')
    fullContent = serializers.CharField(source='full_content')

    class Meta:
        model = Post
        fields = ('id', 'title', 'shortDescription', 'fullContent', 'created_at', 'images', 'slug', 'meta_title', 'meta_description')

# Сериализаторы для опросника
class AnswerSerializer(serializers.ModelSerializer):
    nextQuestionId = serializers.ReadOnlyField(source='next_question.id')
    image = serializers.ImageField(use_url=True, required=False)

    class Meta:
        model = Answer
        fields = ('id', 'text', 'description', 'image', 'nextQuestionId')

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ('id', 'text', 'answers')

class SurveySubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveySubmission
        fields = ('name', 'phone', 'email', 'answers_path') 

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ('id', 'image') 