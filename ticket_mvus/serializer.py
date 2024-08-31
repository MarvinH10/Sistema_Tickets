from rest_framework import serializers
from .models import Categoria, Subcategoria, Estado, Ticket, ArchivoTicket, Pabellon

class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class SubcategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategoria
        fields = '__all__'

class EstadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        fields = '__all__'

class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

class ArchivoTicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArchivoTicket
        fields = '__all__'

class PabellonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pabellon
        fields = '__all__'