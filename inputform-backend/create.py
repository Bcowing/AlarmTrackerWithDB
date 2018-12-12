import json
import os
import time
import uuid
import boto3
dynamodb = boto3.resource('dynamodb')


def create(event, context):
    data = json.loads(event['body'])

    timestamp = int(time.time() * 1000)

    ## Creating a table inside DynamoDB
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    ## Items to populate the table
    item = {
        'id': str(uuid.uuid1()),
        'ticketNum': data['ticketNum'],
        'customerName': data['customerName'],
        'affectedAsset': data['affectedAsset'],
        'accountName': data['accountName'],
        'alarmImpact': data['alarmImpact'],
        'alarmRelevancy': data['alarmRelevancy'],
        'alarmType': data['alarmType'],
        'availabilityMon': data['availabilityMon'],
        'ciaTriad': data['ciaTriad'],
        'eventVolume': data['eventVolume'],
        'dataExtracted': data['dataExtracted'],
        'gainAccess': data['gainAccess'],
        'howLong': data['howLong'],
        'maliciousIntent': data['maliciousIntent'],
        'matchingVuln': data['matchingVuln'],
        'riskLevel': data['riskLevel'],
        'sensitiveInfo': data['sensitiveInfo'],
        'timeTaken': data['timeTaken'],
        'checked': False,
        'createdAt': timestamp,
        'updatedAt': timestamp
    }

    # write the item to the database
    table.put_item(Item=item)

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(item),
        "headers": {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true"
        }
    }

    return response