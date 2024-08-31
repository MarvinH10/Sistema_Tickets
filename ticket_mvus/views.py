from rest_framework import viewsets
from .serializer import CategoriasSerializer, SubcategoriasSerializer, EstadosSerializer, TicketsSerializer, ArchivoTicketsSerializer, PabellonsSerializer
from .models import Categoria, Subcategoria, Estado, Ticket, ArchivoTicket, Pabellon

class CategoriasView(viewsets.ModelViewSet):
    serializer_class = CategoriasSerializer
    queryset = Categoria.objects.all()


class SubcategoriaView(viewsets.ModelViewSet):
    serializer_class = SubcategoriasSerializer
    queryset = Subcategoria.objects.all()


class EstadoView(viewsets.ModelViewSet):
    serializer_class = EstadosSerializer
    queryset = Estado.objects.all()


class TicketView(viewsets.ModelViewSet):
    serializer_class = TicketsSerializer
    queryset = Ticket.objects.all()


class ArchivoTicketView(viewsets.ModelViewSet):
    serializer_class = ArchivoTicketsSerializer
    queryset = ArchivoTicket.objects.all()

class PabellonView(viewsets.ModelViewSet):
    serializer_class = PabellonsSerializer
    queryset = Pabellon.objects.all()