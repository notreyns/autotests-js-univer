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
        // здесь идет создание клиента
        await $('button.clients-add-user-dialog').click();
        await browser.pause(1000);

        // проверка что форма регистрации клиента открылась
        const userForm = await $('div.add-user-modal form');
        await expect(userForm).toExist();

        // далее в поля формы ввожу данные
        const surnameField = await $('input[formcontrolname="userSurname"]');
        await surnameField.setValue('Black');

        const firstnameField = await $('input[formcontrolname="userName"]');
        await firstnameField.setValue('Bellatrix');

        const middlenameField = await $('input[formcontrolname="userMiddleName"]');
        await middlenameField.setValue('BLACKOVNA');

        const maleOptionRadio = await $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');
        await maleOptionRadio.click();

        const emailField = await $('input[formcontrolname="email"]');
        await emailField.setValue('magina70@gmail.com');

        const phoneNumberField = await $('input[formcontrolname="phone"]');
        await phoneNumberField.setValue('996777123123');

        const professionSelect = await $('.mat-select-value');
        professionSelect.click();
        await browser.pause(1000);

        const professionOption = await $('#mat-option-2');
        professionOption.click();

        const datebirthField = await $('input[formcontrolname="birthday"]');
        await datebirthField.setValue('02.12.2000');

        const childrenIcon = await $('.add-user-children__controller-icon');
        await childrenIcon.click();

        const addChildrenBtn = await $('.mat-raised-button');
        await addChildrenBtn.click();

        const childrenName = await $('input[formcontrolname="Name"]');
        await childrenName.setValue('Harry');

        const childrenBirthday = await $('input[formcontrolname="Birthday"]');
        await childrenBirthday.setValue('02.12.2000');

        const childGenderDropdown = await $('mat-select[formcontrolname="Sex"]');
        await childGenderDropdown.click();

        const childrenMaleGender = await $('.mat-option:nth-child(1)');
        childrenMaleGender.click();
        await browser.pause(1000);

        const childrenFormSaveButton = await $('.mat-dialog-actions .mat-raised-button:nth-child(2)');
        childrenFormSaveButton.click();

        // const saveButton = await $('button[name="save"]');
        // // await saveButton.click();
        await browser.pause(15000);
    })

})
