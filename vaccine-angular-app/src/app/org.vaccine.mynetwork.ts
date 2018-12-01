import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.vaccine.mynetwork{
   export abstract class Member extends Participant {
      memberId: string;
      name: string;
   }
   export class Doc extends Member {
   }
   export class Physician extends Member {
   }
   export class Family extends Member {
   }
   export class School extends Member {
   }
   export class Insurance extends Member {
   }
   export class Hospital extends Member {
   }
   export class HealthAdmin extends Member {
   }
   export class VaccineRecord extends Asset {
      vaccineRecordId: string;
      family: Family;
      hospital: Hospital;
      school: School;
      insurance: Insurance;
      vaccineDetails: VaccineDetail[];
   }
   export class VaccineDetail extends Asset {
      vaccineDetailId: string;
      vaccineName: string;
      note: string;
      signed: boolean;
      physician: Physician;
      doc: Doc;
      vacRec: VaccineRecord;
   }
   export abstract class RecPermissionTrans extends Transaction {
      vaccineRecord: VaccineRecord;
   }
   export class RecAccessToHospital extends RecPermissionTrans {
      hospital: Hospital;
   }
   export class RecAccessToInsurance extends RecPermissionTrans {
      insurance: Insurance;
   }
   export class RecAccessToSchool extends RecPermissionTrans {
      school: School;
   }
   export abstract class DetailsTrans extends Transaction {
      detail: VaccineDetail;
   }
   export class DocNote extends DetailsTrans {
      note: string;
   }
   export class PhysicianSignature extends DetailsTrans {
      signed: boolean;
   }
   export class CreateVaccineRecord extends Transaction {
      family: Family;
   }
   export class CreateVaccineDetail extends Transaction {
      vaccineName: string;
      vacRec: VaccineRecord;
      physician: Physician;
      doc: Doc;
   }
// }
