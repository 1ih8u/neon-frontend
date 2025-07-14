from django.db import models
from django.utils.text import slugify
from unidecode import unidecode # type: ignore

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    message = models.TextField(blank=True, null=True)
    contact_preference = models.CharField(max_length=100, blank=True, null=True)
    attachment = models.FileField(upload_to='attachments/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="Название категории")
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок сортировки") # type: ignore

    class Meta:
        ordering = ['order']
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name

class Work(models.Model):
    category = models.ForeignKey(Category, related_name='works', on_delete=models.CASCADE, verbose_name="Категория")
    title = models.CharField(max_length=200, verbose_name="Название работы")
    description = models.TextField(blank=True, verbose_name="Описание")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Работа"
        verbose_name_plural = "Работы"

    def __str__(self):
        return self.title

class WorkImage(models.Model):
    work = models.ForeignKey(Work, related_name='images', on_delete=models.CASCADE, verbose_name="Работа")
    image = models.ImageField(upload_to='works/', verbose_name="Изображение")

    class Meta:
        verbose_name = "Изображение работы"
        verbose_name_plural = "Изображения работ"

    def __str__(self):
        return f"Image for {self.work.title}" # type: ignore

# Модели для блога
class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name="Заголовок")
    short_description = models.TextField(verbose_name="Краткое описание")
    full_content = models.TextField(verbose_name="Полное содержимое")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    
    slug = models.SlugField(max_length=255, unique=True, blank=True, verbose_name="URL (slug)")
    meta_title = models.CharField(max_length=255, blank=True, null=True, verbose_name="Мета-заголовок (SEO)")
    meta_description = models.CharField(max_length=300, blank=True, null=True, verbose_name="Мета-описание (SEO)")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(unidecode(self.title))
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Пост"
        verbose_name_plural = "Посты"

class PostImage(models.Model):
    post = models.ForeignKey(Post, related_name='images', on_delete=models.CASCADE, verbose_name="Пост")
    image = models.ImageField(upload_to='posts/', verbose_name="Изображение")

    class Meta:
        verbose_name = "Изображение поста"
        verbose_name_plural = "Изображения постов"

    def __str__(self):
        return f"Image for {self.post.title}" # type: ignore

# Модели для опросника
class Question(models.Model):
    text = models.CharField(max_length=512, verbose_name="Текст вопроса")
    is_first = models.BooleanField(default=False, verbose_name="Это первый вопрос?") # type: ignore

    class Meta:
        verbose_name = "Вопрос для опросника"
        verbose_name_plural = "Вопросы для опросника"

    def __str__(self):
        return self.text

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE, verbose_name="Вопрос")
    text = models.CharField(max_length=255, verbose_name="Текст ответа")
    description = models.CharField(max_length=255, blank=True, null=True, verbose_name="Дополнительное описание")
    image = models.ImageField(upload_to='answers/', blank=True, null=True, verbose_name="Изображение для ответа")
    next_question = models.ForeignKey(Question, related_name='next_for_answers', on_delete=models.SET_NULL, null=True, blank=True, verbose_name="Следующий вопрос")

    class Meta:
        verbose_name = "Ответ для опросника"
        verbose_name_plural = "Ответы для опросника"

    def __str__(self):
        return self.text

class SurveySubmission(models.Model):
    name = models.CharField(max_length=255, verbose_name="Имя")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    email = models.EmailField(blank=True, null=True, verbose_name="Email")
    answers_path = models.JSONField(verbose_name="Путь ответов")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Результат опроса"
        verbose_name_plural = "Результаты опросов"

    def __str__(self):
        return f"Заявка от {self.name} ({self.created_at.strftime('%Y-%m-%d %H:%M')})" # type: ignore


class Testimonial(models.Model):
    image = models.ImageField(upload_to='testimonials/', verbose_name="Изображение отзыва")
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок сортировки") # type: ignore

    class Meta:
        ordering = ['order']
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"

    def __str__(self):
        return f"Отзыв {self.id}" # type: ignore 