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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VaccineRecordService } from './VaccineRecord.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-vaccinerecord',
  templateUrl: './VaccineRecord.component.html',
  styleUrls: ['./VaccineRecord.component.css'],
  providers: [VaccineRecordService]
})
export class VaccineRecordComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  vaccineRecordId = new FormControl('', Validators.required);
  family = new FormControl('', Validators.required);
  hospital = new FormControl('', Validators.required);
  school = new FormControl('', Validators.required);
  insurance = new FormControl('', Validators.required);
  vaccineDetails = new FormControl('', Validators.required);

  constructor(public serviceVaccineRecord: VaccineRecordService, fb: FormBuilder) {
    this.myForm = fb.group({
      vaccineRecordId: this.vaccineRecordId,
      family: this.family,
      hospital: this.hospital,
      school: this.school,
      insurance: this.insurance,
      vaccineDetails: this.vaccineDetails
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceVaccineRecord.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.vaccine.mynetwork.VaccineRecord',
      'vaccineRecordId': this.vaccineRecordId.value,
      'family': this.family.value,
      'hospital': this.hospital.value,
      'school': this.school.value,
      'insurance': this.insurance.value,
      'vaccineDetails': this.vaccineDetails.value
    };

    this.myForm.setValue({
      'vaccineRecordId': null,
      'family': null,
      'hospital': null,
      'school': null,
      'insurance': null,
      'vaccineDetails': null
    });

    return this.serviceVaccineRecord.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'vaccineRecordId': null,
        'family': null,
        'hospital': null,
        'school': null,
        'insurance': null,
        'vaccineDetails': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.vaccine.mynetwork.VaccineRecord',
      'family': this.family.value,
      'hospital': this.hospital.value,
      'school': this.school.value,
      'insurance': this.insurance.value,
      'vaccineDetails': this.vaccineDetails.value
    };

    return this.serviceVaccineRecord.updateAsset(form.get('vaccineRecordId').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceVaccineRecord.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceVaccineRecord.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'vaccineRecordId': null,
        'family': null,
        'hospital': null,
        'school': null,
        'insurance': null,
        'vaccineDetails': null
      };

      if (result.vaccineRecordId) {
        formObject.vaccineRecordId = result.vaccineRecordId;
      } else {
        formObject.vaccineRecordId = null;
      }

      if (result.family) {
        formObject.family = result.family;
      } else {
        formObject.family = null;
      }

      if (result.hospital) {
        formObject.hospital = result.hospital;
      } else {
        formObject.hospital = null;
      }

      if (result.school) {
        formObject.school = result.school;
      } else {
        formObject.school = null;
      }

      if (result.insurance) {
        formObject.insurance = result.insurance;
      } else {
        formObject.insurance = null;
      }

      if (result.vaccineDetails) {
        formObject.vaccineDetails = result.vaccineDetails;
      } else {
        formObject.vaccineDetails = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'vaccineRecordId': null,
      'family': null,
      'hospital': null,
      'school': null,
      'insurance': null,
      'vaccineDetails': null
      });
  }

}
