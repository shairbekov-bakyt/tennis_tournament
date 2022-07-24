from rest_framework.viewsets import ModelViewSet

from .models import Game
from .serializers import GameSerializerGet, GameSerializerPost, GameSerializerUpdate


class GameViewSet(ModelViewSet):
    serializer_class = GameSerializerGet
    queryset = Game.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return GameSerializerGet

        if self.action == 'create':
            return GameSerializerPost

        if self.action == 'update':
            return GameSerializerUpdate

        return GameSerializerGet
