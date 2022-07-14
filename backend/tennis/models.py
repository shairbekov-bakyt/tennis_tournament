from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Game(models.Model):
    players = (
            ('first', 'first'),
            ('second', 'second')
            )

    first_player = models.ForeignKey(User, on_delete=models.CASCADE)
    second_player = models.ForeignKey(User, on_delete=models.CASCADE)
    turn = models.PositiveSmallIntegerField()
    first_palyer_points = models.PositiveSmallIntegerField()
    second_palyer_points = models.PositiveSmallIntegerField()
    win = models.CharField(choices=players, max_length=7)


