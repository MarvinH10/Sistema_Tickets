from django.db import models
from django.contrib.auth.models import User

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Subcategoria(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name="subcategorias")

    def __str__(self):
        return self.nombre

class Estado(models.Model):
    nombre = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre

class Ticket(models.Model):
    PRIORIDAD_CHOICES = [
        ('baja', 'Baja'),
        ('media', 'Media'),
        ('alta', 'Alta'),
        ('urgente', 'Urgente'),
    ]
    
    titulo = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=500)
    estado_id = models.ForeignKey(Estado, on_delete=models.SET_NULL, null=True)
    prioridad = models.CharField(max_length=10, choices=PRIORIDAD_CHOICES)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    subcategoria = models.ForeignKey(Subcategoria, on_delete=models.SET_NULL, null=True, blank=True)
    edificio_piso = models.CharField(max_length=200)
    solicitante_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='tickets_solicitados')
    soporte_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='tickets_asignados')
    fecha_asignacion = models.DateTimeField(null=True, blank=True)
    fecha_inicio = models.DateTimeField(null=True, blank=True)
    fecha_fin = models.DateTimeField(null=True, blank=True)
    comentarios = models.TextField(blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.titulo} - {self.prioridad}"
    
class ArchivoTicket(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE, related_name='archivos')
    archivo = models.FileField(upload_to='archivos_tickets/')
    nombre = models.CharField(max_length=255, blank=True)
    fecha_subida = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre or self.archivo.name

class Pabellon(models.Model):
    nombre = models.CharField(max_length=200)
    piso = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.nombre} - {self.piso}"