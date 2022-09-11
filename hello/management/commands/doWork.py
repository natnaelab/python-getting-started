import requests
import pandas as pd
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    def handle(self, *args, **options):
        headers = {
            'X-Parse-Application-Id': 'iv6STzF69NXoQJ7vCt6kWH1VLdEb58bCqKJNA9i2',
            'X-Parse-REST-API-Key': '3EfSNa6Uh3dqQWgombEhwwXnVHhXJIlxd8BpRhTYPbcZZkYecyRtqa3t8uoDDUoY',
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        data = 'where={"block_number" :{"$gt": 21122288}}'

        response = requests.get('https://97w7bv7hv9dl.usemoralis.com:2053/server/classes/drip', headers=headers, data=data)
        print (response.json())
        updated_df = pd.json_normalize(response.json(), record_path =['results'])
        updated_df.head()
