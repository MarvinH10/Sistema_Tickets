from django.urls import path, include
from rest_framework import routers
from ticket_mvus import views
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

router = routers.DefaultRouter()
router.register(r'categorias', views.CategoriasView, 'categorias')
router.register(r'subcategorias', views.SubcategoriaView, 'subcategorias')
router.register(r'estado', views.EstadoView, 'estado')
router.register(r'ticket', views.TicketView, 'ticket')
router.register(r'archivo_ticket', views.ArchivoTicketView, 'archivo_ticket')
router.register(r'pabellon', views.PabellonView, 'pabellon')

schema_view = get_schema_view(
    openapi.Info(
        title="TICKET-UDH API's",
        default_version='v1',
        description="Documentación de las API's de TICKET-UDH",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('api/', include(router.urls)),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
