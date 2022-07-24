from django.contrib.auth import get_user, get_user_model

from rest_framework import serializers

from .models import Game


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username', )


class GameSerializerGet(serializers.ModelSerializer):
    first_pl = UserSerializer()
    second_pl = UserSerializer()
    class Meta:
        model = Game
        fields = ('__all__')


class GameSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('__all__')


class GameSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('first_pl_points', 'second_pl_points', 'win')


