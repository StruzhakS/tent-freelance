from django.db import models

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    photo = models.ImageField(upload_to='photos/')  # Фото
    title = models.CharField(max_length=100)  # Назва
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Ціна
    location = models.CharField(max_length=100)  # Місце
    created_at = models.DateTimeField(auto_now_add=True)  # Час розміщення оголошення

    def __str__(self):
        return self.title
