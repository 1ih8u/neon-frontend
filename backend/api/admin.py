import json
from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import (
    Contact, Category, Work, WorkImage, 
    Post, PostImage, 
    Question, Answer, SurveySubmission,
    Testimonial
)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'created_at')
    search_fields = ('name', 'email')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')

class WorkImageInline(admin.TabularInline):
    model = WorkImage
    extra = 1 # Количество пустых слотов для новых изображений

@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'created_at')
    list_filter = ('category',)
    search_fields = ('title', 'description')
    inlines = [WorkImageInline]

# Админка для блога
class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 1

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'short_description', 'full_content')
    inlines = [PostImageInline]
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'short_description', 'full_content')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',)
        }),
    )

# Админка для опросника
class AnswerInline(admin.TabularInline):
    model = Answer
    fk_name = 'question' # Указываем основное поле для связи
    fields = ('text', 'description', 'image', 'next_question')
    extra = 1

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'is_first')
    list_filter = ('is_first',)
    inlines = [AnswerInline]

@admin.register(SurveySubmission)
class SurveySubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'formatted_answers', 'created_at')
    readonly_fields = ('name', 'phone', 'email', 'formatted_answers', 'created_at')
    search_fields = ('name', 'phone', 'email')

    def formatted_answers(self, obj):
        try:
            # answers_path может быть строкой или уже объектом Python
            answers = obj.answers_path if isinstance(obj.answers_path, list) else json.loads(obj.answers_path)
            
            html = "<ul>"
            for item in answers:
                question = item.get('questionText', 'N/A')
                answer = item.get('answerText', 'N/A')
                html += f"<li><strong>{question}:</strong> {answer}</li>"
            html += "</ul>"
            return mark_safe(html)
        except (json.JSONDecodeError, TypeError):
            return "Некорректный формат ответов"

    formatted_answers.short_description = "Ответы пользователя"

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False 


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'image')
    list_editable = ('order',) 