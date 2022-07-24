from django.db import models
from django.contrib.auth import get_user_model
from django.forms import ValidationError

USER = get_user_model()


class Game(models.Model):
    TURN = (
            ('first', 'first'),
            ('second', 'second'),
            )

    first_pl = models.ForeignKey(USER, on_delete=models.CASCADE, verbose_name = 'first player', related_name='first_player')
    second_pl = models.ForeignKey(USER, on_delete=models.CASCADE, verbose_name = 'second player', related_name='second_player')
    turn = models.CharField(max_length = 7, verbose_name ='in turn', choices=TURN, default='first')
    first_pl_points = models.PositiveSmallIntegerField(default = 0, verbose_name = 'first player points')
    second_pl_points = models.PositiveSmallIntegerField(default = 0, verbose_name = 'second player points')
    win = models.ForeignKey(USER, on_delete=models.CASCADE, verbose_name='winner', related_name ='winner', null =True, blank=True)

    def save(self, *args, **kwargs):
        if (int(self.first_pl_points) + int(self.second_pl_points)) % 2 == 0:
            self.turn = 'first' if self.turn == 'second' else 'second'

        if int(self.first_pl_points) == 12:
            self.win = self.first_pl

        if int(self.second_pl_points) == 12:
            self.win = self.second_pl
        
        if (int(self.second_pl_points) + int(self.second_pl_points)) >= 23 or \
            int(self.second_pl_points) >= 13 or int(self.first_pl_points) >= 13:

            raise ValidationError('max score in tennis maybe 12')
        super().save(*args, **kwargs)
 
    def __str__(self):
        return str(self.id)
# Create your models here.
