import { Injectable, Input } from '@angular/core';
import {Http, HttpModule, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import'rxjs/add/operator/do';


 @Injectable()
 export class DatabaseService {

   private API_URL = 'https://n5zzzazza0.execute-api.us-east-1.amazonaws.com/dev/form';

   constructor(private http: Http) { }

   createPerson(ticketNum, customerName, affectedAsset, accountName, alarmImpact, alarmRelevancy, alarmType, availabilityMon,
    ciaTriad, eventVolume, dataExtracted, gainAccess, howLong, maliciousIntent, matchingVuln, riskLevel, sensitiveInfo, timeTaken) {
     let headers = new Headers({'Content-Type' : 'application/json'});
     let options = new RequestOptions({ headers: headers});
     let INFO =  Object.assign(ticketNum, customerName, affectedAsset, accountName, alarmImpact, alarmRelevancy, alarmType, availabilityMon,
        ciaTriad, eventVolume, dataExtracted, gainAccess, howLong, maliciousIntent, matchingVuln, riskLevel, sensitiveInfo, timeTaken,);
     let body = JSON.stringify(INFO);
     return this.http.post(this.API_URL, body, options).map((res: Response) => res.json());
   }

   getInfo(id: string){
     return this.http.get(this.API_URL + id)
       .map((res:Response) => res.json());
   }

 }