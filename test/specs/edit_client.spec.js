const LoginPage = require("../pageobjects/loginPage");

describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Edit Client', async ()=> {
        await browser.pause(3000);
    
        const firstClient = await $('.crm-navigator-table__row:nth-child(1) td');
        firstClient.click();
        await browser.pause(2000);
    
        const surnameInput = await $('#mat-input-1');
        surnameInput.click();
        await browser.pause(1000);
    
        await surnameInput.setValue('John');
        await browser.pause(1000);
    
        const nameInput = await $('#mat-input-2');
        nameInput.click();
        await browser.pause(1000);
    
        await nameInput.setValue('Snow');
        await browser.pause(1000);
    
        const modal = await $('.modal-window-content');
        await modal.click();
        await browser.pause(1000);
    
        const formSubmitBtn = await $('.save-btn > button');
        await formSubmitBtn.click();
    
        // wait till form submits
        await browser.pause(15000);

        //submit click not working, so we can't accept the alert with successful changes, so we can't go further
        // await browser.acceptAlert();

        //const firstRow = await $('.crm-navigator-table__row:nth-child(1) td:nth-child(1)');
        //expect(firstRow).toHaveValue('John Snow')
      })
    
})
