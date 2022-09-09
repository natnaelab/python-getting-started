from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from .models import  TableData

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")


def data_json(request):
    result_list = list(TableData.objects.all()\
                .values('Index', 
                        'Referrals',
                        'Total_deposits',
                        'Total_payouts',
                        'Total_structure',
                        'Airdrops_total',
                        'Airdrops_received',
                        'Team_address',
                        'Ranking',
                        'Team_name',
                        'Team_benefits',
                       ))
  
    return JsonResponse(result_list, safe=False)
