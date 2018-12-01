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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for vaccine-angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be vaccine-angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('vaccine-angular-app');
    })
  });

  it('network-name should be vaccine-app@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('vaccine-app@0.0.1.bna');
    });
  });

  it('navbar-brand should be vaccine-angular-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('vaccine-angular-app');
    });
  });

  
    it('VaccineRecord component should be loadable',() => {
      page.navigateTo('/VaccineRecord');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('VaccineRecord');
      });
    });

    it('VaccineRecord table should have 7 columns',() => {
      page.navigateTo('/VaccineRecord');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('VaccineDetail component should be loadable',() => {
      page.navigateTo('/VaccineDetail');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('VaccineDetail');
      });
    });

    it('VaccineDetail table should have 8 columns',() => {
      page.navigateTo('/VaccineDetail');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Doc component should be loadable',() => {
      page.navigateTo('/Doc');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Doc');
      });
    });

    it('Doc table should have 3 columns',() => {
      page.navigateTo('/Doc');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Physician component should be loadable',() => {
      page.navigateTo('/Physician');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Physician');
      });
    });

    it('Physician table should have 3 columns',() => {
      page.navigateTo('/Physician');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Family component should be loadable',() => {
      page.navigateTo('/Family');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Family');
      });
    });

    it('Family table should have 3 columns',() => {
      page.navigateTo('/Family');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('School component should be loadable',() => {
      page.navigateTo('/School');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('School');
      });
    });

    it('School table should have 3 columns',() => {
      page.navigateTo('/School');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Insurance component should be loadable',() => {
      page.navigateTo('/Insurance');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Insurance');
      });
    });

    it('Insurance table should have 3 columns',() => {
      page.navigateTo('/Insurance');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Hospital component should be loadable',() => {
      page.navigateTo('/Hospital');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Hospital');
      });
    });

    it('Hospital table should have 3 columns',() => {
      page.navigateTo('/Hospital');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('HealthAdmin component should be loadable',() => {
      page.navigateTo('/HealthAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('HealthAdmin');
      });
    });

    it('HealthAdmin table should have 3 columns',() => {
      page.navigateTo('/HealthAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('RecAccessToHospital component should be loadable',() => {
      page.navigateTo('/RecAccessToHospital');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RecAccessToHospital');
      });
    });
  
    it('RecAccessToInsurance component should be loadable',() => {
      page.navigateTo('/RecAccessToInsurance');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RecAccessToInsurance');
      });
    });
  
    it('RecAccessToSchool component should be loadable',() => {
      page.navigateTo('/RecAccessToSchool');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RecAccessToSchool');
      });
    });
  
    it('DocNote component should be loadable',() => {
      page.navigateTo('/DocNote');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DocNote');
      });
    });
  
    it('PhysicianSignature component should be loadable',() => {
      page.navigateTo('/PhysicianSignature');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('PhysicianSignature');
      });
    });
  
    it('CreateVaccineRecord component should be loadable',() => {
      page.navigateTo('/CreateVaccineRecord');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateVaccineRecord');
      });
    });
  
    it('CreateVaccineDetail component should be loadable',() => {
      page.navigateTo('/CreateVaccineDetail');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateVaccineDetail');
      });
    });
  

});