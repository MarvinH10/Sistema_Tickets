from django.contrib import admin
from .models import Categoria, Subcategoria, Estado, Ticket, ArchivoTicket, Pabellon

admin.site.register(Categoria)
admin.site.register(Subcategoria)
admin.site.register(Estado)
admin.site.register(Ticket)
admin.site.register(ArchivoTicket)
admin.site.register(Pabellon)
