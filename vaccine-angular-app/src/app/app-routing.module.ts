/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { VaccineRecordComponent } from './VaccineRecord/VaccineRecord.component';
import { VaccineDetailComponent } from './VaccineDetail/VaccineDetail.component';

import { DocComponent } from './Doc/Doc.component';
import { PhysicianComponent } from './Physician/Physician.component';
import { FamilyComponent } from './Family/Family.component';
import { SchoolComponent } from './School/School.component';
import { InsuranceComponent } from './Insurance/Insurance.component';
import { HospitalComponent } from './Hospital/Hospital.component';
import { HealthAdminComponent } from './HealthAdmin/HealthAdmin.component';

import { RecAccessToHospitalComponent } from './RecAccessToHospital/RecAccessToHospital.component';
import { RecAccessToInsuranceComponent } from './RecAccessToInsurance/RecAccessToInsurance.component';
import { RecAccessToSchoolComponent } from './RecAccessToSchool/RecAccessToSchool.component';
import { DocNoteComponent } from './DocNote/DocNote.component';
import { PhysicianSignatureComponent } from './PhysicianSignature/PhysicianSignature.component';
import { CreateVaccineRecordComponent } from './CreateVaccineRecord/CreateVaccineRecord.component';
import { CreateVaccineDetailComponent } from './CreateVaccineDetail/CreateVaccineDetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'VaccineRecord', component: VaccineRecordComponent },
  { path: 'VaccineDetail', component: VaccineDetailComponent },
  { path: 'Doc', component: DocComponent },
  { path: 'Physician', component: PhysicianComponent },
  { path: 'Family', component: FamilyComponent },
  { path: 'School', component: SchoolComponent },
  { path: 'Insurance', component: InsuranceComponent },
  { path: 'Hospital', component: HospitalComponent },
  { path: 'HealthAdmin', component: HealthAdminComponent },
  { path: 'RecAccessToHospital', component: RecAccessToHospitalComponent },
  { path: 'RecAccessToInsurance', component: RecAccessToInsuranceComponent },
  { path: 'RecAccessToSchool', component: RecAccessToSchoolComponent },
  { path: 'DocNote', component: DocNoteComponent },
  { path: 'PhysicianSignature', component: PhysicianSignatureComponent },
  { path: 'CreateVaccineRecord', component: CreateVaccineRecordComponent },
  { path: 'CreateVaccineDetail', component: CreateVaccineDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
