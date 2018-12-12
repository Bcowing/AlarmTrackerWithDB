import { Component, OnInit } from '@angular/core';
import { Choices } from '../choices';
import { CHOICES } from '../choices-list';
import { QUESTIONS } from '../questions-list';
import { NgForm, FormControl } from '@angular/forms';
import {DatabaseService} from "../services/database.services";
import {Observable} from "rxjs";





@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.css'],
  providers:[DatabaseService]
})
export class AlarmFormComponent implements OnInit {

  public new_ticketNum;
  public new_customerName;
  public new_affectedAsset;
  public new_alarmImpact;
  public new_alarmType;
  public new_riskLevel;
  public new_eventVolume;
  public new_alarmRelevancy;
  public new_maliciousIntent;
  public new_matchingVuln;
  public new_availabilityMon;
  public new_accountName;
  public new_howLong;
  public new_gainAccess;
  public new_dataExtracted;
  public new_ciaTriad;
  public new_sensitiveInfo;
  public new_timeTaken;

  
  public people = [];

  constructor(private database: DatabaseService) { }
  
  ngOnInit() {
    this.database.getInfo("").subscribe(data => this.people = data);
  }




  createPerson(ticketNum, customerName, affectedAsset, accountName, alarmImpact, alarmRelevancy, alarmType, availabilityMon,
    ciaTriad, eventVolume, dataExtracted, gainAccess, howLong, maliciousIntent, matchingVuln, riskLevel, sensitiveInfo, timeTaken) {

    let TicketNum  = { ticketNum : ticketNum };
    let CustomerName = { customerName: customerName };
    let AffectedAsset     = { affectedAsset : affectedAsset };
    let AccountName     = { accountName : accountName };
    let AlarmImpact     = { alarmImpact : alarmImpact };
    let AlarmRelevancy     = { alarmRelevancy : alarmRelevancy };
    let AlarmType     = { alarmType : alarmType };
    let AvailabilityMon     = { availabilityMon : availabilityMon };
    let CiaTriad     = { ciaTriad : ciaTriad };
    let EventVolume     = { eventVolume : eventVolume };
    let DataExtracted     = { dataExtracted : dataExtracted };
    let GainAccess     = { gainAccess : gainAccess };
    let HowLong     = { howLong : howLong };
    let MatchingVuln     = { matchingVuln : matchingVuln };
    let MaliciousIntent     = { maliciousIntent : maliciousIntent };
    let RiskLevel     = { riskLevel : riskLevel };
    let SensitiveInfo     = { sensitiveInfo : sensitiveInfo };
    let TimeTaken     = { timeTaken : timeTaken };
    

    this.database.createPerson(TicketNum, CustomerName, AffectedAsset, AccountName, AlarmImpact, AlarmRelevancy, AlarmType, AvailabilityMon,
      CiaTriad, EventVolume, DataExtracted, GainAccess, HowLong, MaliciousIntent, MatchingVuln, RiskLevel, SensitiveInfo, TimeTaken).subscribe(
      data => {
        return true;
      },
      error => {
        console.error("Error creating item");
        return Observable.throw(error);
      }
    );
    }

  login() {
    this.database.getInfo("").subscribe(data => this.people = data);
    console.log(this.people);
  }

  refresh(){
    this.database.getInfo("").subscribe(data => this.people = data);
  }

  numGreen = 0;
  numYellow = 0;
  numRed = 0;


  newAlarm(){
    this.customerName.setValue('');
    this.ticketNum.setValue('');
    this.affectedAsset.setValue('');
    this.alarmImpact.setValue('');
    this.alarmType.setValue('');
    this.riskLevel.setValue('');
    this.eventVolume.setValue('');
    this.alarmRelevancy.setValue('');
    this.maliciousIntent.setValue('');
    this.matchingVuln.setValue('');
    this.availabilityMon.setValue('');
    this.accountName.setValue('');
    this.howLong.setValue('');
    this.gainAccess.setValue('');
    this.dataExtracted.setValue('');
    this.ciaTriad.setValue('');
    this.sensitiveInfo.setValue('');
    this.numGreen = 0;
    this.numYellow = 0;
    this.numRed = 0;
    this.timeTaken.setValue('');
  }

  updateAffectedG(numGreen, affecteddisabler) {
    this.affectedAsset.setValue('Workstation/Personal Device');
    return numGreen = numGreen + 1;
  }
  updateAffectedY(numYellow,affecteddisabler) {
    this.affectedAsset.setValue('Non-Core Server/Network Device');
    return numYellow = numYellow + 1;
  }
  updateAffectedR(numRed, affecteddisabler) {
    this.affectedAsset.setValue('Core Asset');
    return numRed = numRed + 1;
  }

  updatealarmImpactG(numGreen) {
    this.alarmImpact.setValue('No Outages');
    return numGreen = numGreen + 1;
  }
  updatealarmImpactY(numYellow) {
    this.alarmImpact.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updatealarmImpactR(numRed) {
    this.alarmImpact.setValue('Network Outage');
    return  numRed = numRed + 1;
  }

  updatealarmTypeG(numGreen) {
    this.alarmType.setValue('Reconnaissance & Probing / Eviromental Awareness');
    return  numGreen = numGreen + 1;
  }
  updatealarmTypeY(numYellow) {
    this.alarmType.setValue('Delivery and Attack');
    return  numYellow = numYellow + 1;
  }
  updatealarmTypeR(numRed) {
    this.alarmType.setValue('System Compromise / Exploitation & Installation');
    return  numRed = numRed + 1;
  }

  updatealarmRiskG(numGreen) {
    this.riskLevel.setValue('Low (1)');
    return  numGreen = numGreen + 1;
  }
  updatealarmRiskY(numYellow) {
    this.riskLevel.setValue('Medium (2)');
    return  numYellow = numYellow + 1;
  }
  updatealarmRiskR(numRed) {
    this.riskLevel.setValue('High (3-10)');
    return  numRed = numRed + 1;
  }

  updatealarmVolumeG(numGreen) {
    this.eventVolume.setValue('Low (1-10)');
    return  numGreen = numGreen + 1;
  }
  updatealarmVolumeY(numYellow) {
    this.eventVolume.setValue('Medium (11-25)');
    return  numYellow = numYellow + 1;
  }
  updatealarmVolumeR(numRed) {
    this.eventVolume.setValue('High (26+)');
    return  numRed = numRed + 1;
  }

  updatealarmRelevancyG(numGreen) {
    this.alarmRelevancy.setValue('Not Relevant');
    return  numGreen = numGreen + 1;
  }
  updatealarmRelevancyY(numYellow) {
    this.alarmRelevancy.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updatealarmRelevancyR(numRed) {
    this.alarmRelevancy.setValue('Relevant');
    return  numRed = numRed + 1;
  }

  updateIntentG(numGreen) {
    this.maliciousIntent.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updateIntentY(numYellow) {
    this.maliciousIntent.setValue('No, Possible Misconfiguration');
    return  numYellow = numYellow + 1;
  }
  updateIntentR(numRed) {
    this.maliciousIntent.setValue('Yes');
    return  numRed = numRed + 1;
  }

  updatematchingG(numGreen) {
    this.matchingVuln.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updatematchingY(numYellow) {
    this.matchingVuln.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updatematchingR(numRed) {
    this.matchingVuln.setValue('Yes');
    return  numRed = numRed + 1;
  }

  updateavailG(numGreen) {
    this.availabilityMon.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updateavailY(numYellow) {
    this.availabilityMon.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updateavailR(numRed) {
    this.availabilityMon.setValue('Down');
    return  numRed = numRed + 1;
  }

  updatenameG(numGreen) {
    this.accountName.setValue('User');
    return  numGreen = numGreen + 1;
  }
  updatenameY(numYellow) {
    this.accountName.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updatenameR(numRed) {
    this.accountName.setValue('Administrator Account');
    return  numRed = numRed + 1;
  }

  updatehowLongG(numGreen) {
    this.howLong.setValue('Over 1 year');
    return  numGreen = numGreen + 1;
  }
  updatehowLongY(numYellow) {
    this.howLong.setValue('Less than 1 year');
    return  numYellow = numYellow + 1;
  }
  updatehowLongR(numRed) {
    this.howLong.setValue('Within 1 month or Zero Day');
    return  numRed = numRed + 1;
  }

  updateAccessG(numGreen) {
    this.gainAccess.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updateAccessY(numYellow) {
    this.gainAccess.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updateAccessR(numRed) {
    this.gainAccess.setValue('Yes');
    return  numRed = numRed + 1;
  }

  updateextractedG(numGreen) {
    this.dataExtracted.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updateextractedY(numYellow) {
    this.dataExtracted.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updateextractedR(numRed) {
    this.dataExtracted.setValue('Yes');
    return  numRed = numRed + 1;
  }

  updateCIAG(numGreen) {
    this.ciaTriad.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updateCIAY(numYellow) {
    this.ciaTriad.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updateCIAR(numRed) {
    this.ciaTriad.setValue('Yes');
    return  numRed = numRed + 1;
  }

  updateSensitiveG(numGreen) {
    this.sensitiveInfo.setValue('No');
    return  numGreen = numGreen + 1;
  }
  updateSensitiveY(numYellow) {
    this.sensitiveInfo.setValue('Unknown');
    return  numYellow = numYellow + 1;
  }
  updateSensitiveR(numRed) {
    this.sensitiveInfo.setValue('Yes');
    return  numRed = numRed + 1;
  }

    ticketNum = new FormControl('');
    customerName = new FormControl('');
    affectedAsset = new FormControl('');
    accountName = new FormControl('');
    alarmImpact = new FormControl('');
    alarmRelevancy = new FormControl('');
    alarmType = new FormControl('');
    availabilityMon = new FormControl('');
    ciaTriad = new FormControl('');
    eventVolume = new FormControl('');
    dataExtracted = new FormControl('');
    gainAccess = new FormControl('');
    howLong = new FormControl('');
    maliciousIntent = new FormControl('');
    matchingVuln = new FormControl('');
    riskLevel = new FormControl('');
    sensitiveInfo = new FormControl('');
    timeTaken = new FormControl('');

    choices: Choices = {
      green: 'bcowing',
      yellow: 'bcowing1',
      red: 'bcowing2',
      name: 'bcowing3',
      nameG: 'bcowing4',
   };

   isSubmitted: boolean = false;
   loginPressed: boolean = false;
   checkedNum: boolean = true;
   checkedCust: boolean = true;
   checkedAffected: boolean = true;
   checkedImpact: boolean = true;
   checkedTYPE: boolean = true;
   checkedRisk: boolean = true;
   checkedVolume: boolean = true;
   checkedRelevant: boolean = true;
   checkedIntent: boolean = true;
   checkedMatching: boolean = true;
   checkedAvail: boolean = true;
   checkedType: boolean = true;
   checkedHow: boolean = true;
   checkedAccess: boolean = true;
   checkedData: boolean = true;
   checkedCIA: boolean = true;
   checkedSensitive: boolean = true;
   checkedTime: boolean = false;



   choiceS = CHOICES;
   
   

   onSubmit(form: NgForm){
    console.log(form);
  }

  

  

}
