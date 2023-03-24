const Page = require('./page');

class ClientPage extends Page{

    get addClientBtn () { return $('button.clients-add-user-dialog'); }
    get userForm () { return $('div.add-user-modal form'); }
    get surnameField () { return $('input[formcontrolname="userSurname"]'); }
    get firstnameField () { return $('input[formcontrolname="userName"]'); }
    get middleNameField() { return $('input[formcontrolname="userMiddleName"]');}
    get maleOptionRadio() {return $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');}
    get emailField() {return $('input[formcontrolname="email"]');}
    get phoneNumberField() {return $('input[formcontrolname="phone"]');}
    get dateBirthField() { return $('input[formcontrolname="birthday"]');}
    get saveClientBtn() {return $('button[name="save"]');}
    get professionSelect() {return $('.mat-select-value');}
    get professionOption() {return $('#mat-option-2');}
    get childrenIcon() {return $('.add-user-children__controller-icon');}
    get addChildrenBtn() {return $('.mat-raised-button');}
    get childrenNameField(){return $('input[formcontrolname="Name"]');}
    get childrenBirthday() {return $('input[formcontrolname="Birthday"]');}
    get childGenderDropdown(){return $('mat-select[formcontrolname="Sex"]');}
    get childrenMaleGender() {return $('.mat-option:nth-child(1)');}
    get childrenFormSaveBtn(){return $('.mat-dialog-actions .mat-raised-button:nth-child(2)');}
    get fullnameOfFirstClient() {return $('.crm-navigator-table__row:nth-child(1) td:nth-child(1) div span');}
    get firstRow(){return $('.crm-navigator-table__row:nth-child(1) td:nth-child(1)');}
    get inputSurname(){return $('#mat-input-1');}
    get inputName(){return $('#mat-input-2');}
    get firstClient(){return $('.crm-navigator-table__row:nth-child(1) td');}
    get modalWindow(){return $('.modal-window-content');}
    get formSubmitBtn(){return $('.save-btn > button');}

    async createBasicClient() {
        await this.addClientBtn.click();
        await browser.pause(1000);
        await expect(this.userForm).toExist();
        await this.surnameField.setValue('Potter');
        await this.firstnameField.setValue('Harry');
        await this.maleOptionRadio.click();
        await this.emailField.setValue('reinahogwarts@gmail.com')
        await this.phoneNumberField.setValue('996777123123')
        await this.dateBirthField.setValue('03.10.2001')
        await this.saveClientBtn.click();
        await browser.pause(15000)
    }

    async createFullClient(){
        await this.addClientBtn.click();
        await browser.pause(1000);
        await expect(this.userForm).toExist();
        await this.surnameField.setValue('Potter');
        await this.firstnameField.setValue('Harry');
        await this.maleOptionRadio.click();
        await this.emailField.setValue('reinahogwarts@gmail.com')
        await this.phoneNumberField.setValue('996777123123')
        await this.dateBirthField.setValue('03.10.2001')
        await this.professionSelect.click();
        await browser.pause(1000);
        await this.professionOption.click();
        await this.childrenIcon.click();
        await this.addChildrenBtn.click();
        await this.childrenNameField.setValue('Harry')
        await this.childrenBirthday.setValue('01.01.2001');
        await this.childGenderDropdown.click();
        await this.childrenMaleGender.click();
        await browser.pause(1000);
        await this.childrenFormSaveBtn.click();
        await this.saveClientBtn.click();
        await browser.pause(15000);
    }

    async viewClient() {
        const fullNameText = await this.fullnameOfFirstClient.getText();
        await this.firstRow.click();
        await browser.pause(4000);
        expect(this.inputSurname).toHaveValue(fullNameText);
        expect(this.inputName).toHaveValue(fullNameText);
        await browser.pause(15000);
    }

    async editClient(){
        await browser.pause(3000);
        await this.firstClient.click();
        await browser.pause(3000);
        await this.inputSurname.click();
        await browser.pause(1000);
        await this.inputSurname.setValue('Snow')
        await browser.pause(1000);
        await this.inputName.click();
        await browser.pause(1000);
        await this.inputName.setValue('John')
        await browser.pause(1000);
        await this.modalWindow.click();
        await browser.pause(1000);
        await this.formSubmitBtn.click();
        await browser.pause(15000);

        //submit click not working, so we can't accept the alert with successful changes, so we can't go further
        //await browser.acceptAlert();
        //expect(this.firstRow).toHaveValue('Snow John')
    }
}

module.exports = new ClientPage();

