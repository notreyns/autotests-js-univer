const LoginPage = require("../pageobjects/loginPage");

describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create full client', async ()=> {
        //press add client button
        await $('button.clients-add-user-dialog').click();
        await browser.pause(1000);

        //check is next screen with userForm opened
        const userForm = await $('div.add-user-modal form');
        await expect(userForm).toExist();

        //entering the required inputs
        const surnameField = await $('input[formcontrolname="userSurname"]');
        await surnameField.setValue('Potter');

        const firstnameField = await $('input[formcontrolname="userName"]');
        await firstnameField.setValue('Harry');

        const middlenameField = await $('input[formcontrolname="userMiddleName"]');
        await middlenameField.setValue('James');
        expect(middlenameField).toHaveText('James')

        const maleOptionRadio = await $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');
        await maleOptionRadio.click();

        const emailField = await $('input[formcontrolname="email"]');
        await emailField.setValue('magina70@gmail.com');

        const phoneNumberField = await $('input[formcontrolname="phone"]');
        await phoneNumberField.setValue('996777123123');

        //set birthday
        const datebirthField = await $('input[formcontrolname="birthday"]');
        await datebirthField.setValue('02.12.2000');

        //create the client by pressing save button
        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(15000);
    })

    
})
