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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VaccineRecordComponent,
    VaccineDetailComponent,
    DocComponent,
    PhysicianComponent,
    FamilyComponent,
    SchoolComponent,
    InsuranceComponent,
    HospitalComponent,
    HealthAdminComponent,
    RecAccessToHospitalComponent,
    RecAccessToInsuranceComponent,
    RecAccessToSchoolComponent,
    DocNoteComponent,
    PhysicianSignatureComponent,
    CreateVaccineRecordComponent,
    CreateVaccineDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
