from django.db import models

# Create your models here.

class TableData(models.Model):
    Index = models.CharField(max_length=200, unique=True)
    Referrals = models.IntegerField(blank=True, null=True)
    Total_deposits = models.IntegerField(blank=True, null=True)
    Total_payouts = models.IntegerField(blank=True, null=True)
    Total_structure = models.IntegerField(blank=True, null=True)
    Airdrops_total = models.IntegerField(blank=True, null=True)
    Airdrops_received = models.IntegerField(blank=True, null=True)
    Team_address = models.TextField(blank=True, null=True)
    Ranking = models.IntegerField(blank=True, null=True)
    Team_name = models.CharField(max_length=200,blank=True, null=True)
    Team_benefits = models.CharField(max_length=200,blank=True, null=True)

    def __str__(self):
        return self.Team_name
