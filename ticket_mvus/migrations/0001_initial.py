# Generated by Django 5.1 on 2024-09-03 05:28

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Estado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Pabellon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('piso', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('username', models.CharField(blank=True, max_length=150, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Subcategoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subcategorias', to='ticket_mvus.categoria')),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('descripcion', models.CharField(max_length=500)),
                ('prioridad', models.CharField(choices=[('baja', 'Baja'), ('media', 'Media'), ('alta', 'Alta'), ('urgente', 'Urgente')], max_length=10)),
                ('edificio_piso', models.CharField(max_length=200)),
                ('fecha_asignacion', models.DateTimeField(blank=True, null=True)),
                ('fecha_inicio', models.DateTimeField(blank=True, null=True)),
                ('fecha_fin', models.DateTimeField(blank=True, null=True)),
                ('comentarios', models.TextField(blank=True)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizacion', models.DateTimeField(auto_now=True)),
                ('categoria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='ticket_mvus.categoria')),
                ('estado_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='ticket_mvus.estado')),
                ('solicitante_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tickets_solicitados', to=settings.AUTH_USER_MODEL)),
                ('soporte_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tickets_asignados', to=settings.AUTH_USER_MODEL)),
                ('subcategoria', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='ticket_mvus.subcategoria')),
            ],
        ),
        migrations.CreateModel(
            name='ArchivoTicket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('archivo', models.FileField(upload_to='archivos_tickets/')),
                ('nombre', models.CharField(blank=True, max_length=255)),
                ('fecha_subida', models.DateTimeField(auto_now_add=True)),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='archivos', to='ticket_mvus.ticket')),
            ],
        ),
    ]
