import { Choices } from './choices';

export const CHOICES: Choices[] = [
    {name: 'Affected Asset: ', green: 'Workstation/Personal Device', yellow: 'Non-Core Server/Network Device', red: 'Core Asset', nameG: 'affectedAsset'},
    {name: 'Impact of Alarm: ', green: 'No Outages', yellow: 'Unknown', red: 'Network Outage', nameG: 'alarmImpact'},
    {name: 'Alarm Type: ', green: 'Reconnaissance & Probing/Enviromental Awareness', yellow: 'Delivery & Attack', red: 'System Compromise/Exploitation & Installation', nameG: 'alarmType'},
    {name: 'Risk Level: ', green: 'Low (1)', yellow: 'Medium (2)', red: 'High (3-10)', nameG: 'riskLevel'},
    {name: 'Volume of Events: ', green: 'Low (1-10)', yellow: 'Medium (11-25)', red: 'High (26+)', nameG: 'eventVolume'},
    {name: 'Alarm Relevancy: ', green: 'Not Relevant', yellow: 'Unknown', red: 'Relevant', nameG: 'alarmRelevancy'},
    {name: 'Intent (malicious intent): ', green: 'No', yellow: 'No, Possible Misconfiguration', red: 'Yes', nameG: 'maliciousIntent'},
    {name: 'Matching Vulnerabilities: ', green: 'No', yellow: 'Unknown', red: 'Yes', nameG: 'matchingVuln'},
    {name: 'Availability Monitoring: ', green: 'Up', yellow: 'Unknown', red: 'Down', nameG: 'availabilityMon'},
    {name: 'Account Name: ', green: 'User', yellow: 'Unknown', red: 'Administrator Account', nameG: 'accountName'},
    {name: 'How long has the threat been known: ', green: 'Over 1 Year', yellow: 'Less than 1 year', red: 'Within 1 month or Zero Day', nameG: 'howLong'},
    {name: 'Did the attacker gain access: ', green: 'No', yellow: 'Unknown', red: 'Yes', nameG: 'gainAccess'},
    {name: 'Was data extracted: ', green: 'No', yellow: 'Unknown', red: 'Yes', nameG: 'dataExtracted'},
    {name: 'Has CIA Triad been violated: ', green: 'No', yellow: 'Unknown', red: 'Yes', nameG: 'ciaTriad'},
    {name: 'Is sensitive Info Involved: ', green: 'No', yellow: 'Unknown', red: 'Yes', nameG: 'sensitiveInfo'},
       
];