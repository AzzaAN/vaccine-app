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
import { VaccineDetailService } from './VaccineDetail.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-vaccinedetail',
  templateUrl: './VaccineDetail.component.html',
  styleUrls: ['./VaccineDetail.component.css'],
  providers: [VaccineDetailService]
})
export class VaccineDetailComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  vaccineDetailId = new FormControl('', Validators.required);
  vaccineName = new FormControl('', Validators.required);
  note = new FormControl('', Validators.required);
  signed = new FormControl('', Validators.required);
  physician = new FormControl('', Validators.required);
  doc = new FormControl('', Validators.required);
  vacRec = new FormControl('', Validators.required);

  constructor(public serviceVaccineDetail: VaccineDetailService, fb: FormBuilder) {
    this.myForm = fb.group({
      vaccineDetailId: this.vaccineDetailId,
      vaccineName: this.vaccineName,
      note: this.note,
      signed: this.signed,
      physician: this.physician,
      doc: this.doc,
      vacRec: this.vacRec
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceVaccineDetail.getAll()
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
      $class: 'org.vaccine.mynetwork.VaccineDetail',
      'vaccineDetailId': this.vaccineDetailId.value,
      'vaccineName': this.vaccineName.value,
      'note': this.note.value,
      'signed': this.signed.value,
      'physician': this.physician.value,
      'doc': this.doc.value,
      'vacRec': this.vacRec.value
    };

    this.myForm.setValue({
      'vaccineDetailId': null,
      'vaccineName': null,
      'note': null,
      'signed': null,
      'physician': null,
      'doc': null,
      'vacRec': null
    });

    return this.serviceVaccineDetail.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'vaccineDetailId': null,
        'vaccineName': null,
        'note': null,
        'signed': null,
        'physician': null,
        'doc': null,
        'vacRec': null
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
      $class: 'org.vaccine.mynetwork.VaccineDetail',
      'vaccineName': this.vaccineName.value,
      'note': this.note.value,
      'signed': this.signed.value,
      'physician': this.physician.value,
      'doc': this.doc.value,
      'vacRec': this.vacRec.value
    };

    return this.serviceVaccineDetail.updateAsset(form.get('vaccineDetailId').value, this.asset)
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

    return this.serviceVaccineDetail.deleteAsset(this.currentId)
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

    return this.serviceVaccineDetail.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'vaccineDetailId': null,
        'vaccineName': null,
        'note': null,
        'signed': null,
        'physician': null,
        'doc': null,
        'vacRec': null
      };

      if (result.vaccineDetailId) {
        formObject.vaccineDetailId = result.vaccineDetailId;
      } else {
        formObject.vaccineDetailId = null;
      }

      if (result.vaccineName) {
        formObject.vaccineName = result.vaccineName;
      } else {
        formObject.vaccineName = null;
      }

      if (result.note) {
        formObject.note = result.note;
      } else {
        formObject.note = null;
      }

      if (result.signed) {
        formObject.signed = result.signed;
      } else {
        formObject.signed = null;
      }

      if (result.physician) {
        formObject.physician = result.physician;
      } else {
        formObject.physician = null;
      }

      if (result.doc) {
        formObject.doc = result.doc;
      } else {
        formObject.doc = null;
      }

      if (result.vacRec) {
        formObject.vacRec = result.vacRec;
      } else {
        formObject.vacRec = null;
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
      'vaccineDetailId': null,
      'vaccineName': null,
      'note': null,
      'signed': null,
      'physician': null,
      'doc': null,
      'vacRec': null
      });
  }

}
