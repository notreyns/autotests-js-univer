const LoginPage = require("../pageobjects/loginPage");

describe('Clients Suit', ()=> {
  beforeEach( async() => {
    await LoginPage.open();
    await LoginPage.doLogin('Admin', 'Admin@Navi')
  })

  afterEach( async()=>{
    await browser.reloadSession();
  })

  it('view client', async () => {
    //get the fullname of the first client in the list of clients
    const fullName = await $('.crm-navigator-table__row:nth-child(1) td:nth-child(1) div span');
    const fullNameText = await fullName.getText();

    //click on the first row of clients
    const firstRow = await $('.crm-navigator-table__row:nth-child(1) td:nth-child(1)');
    firstRow.click();
    await browser.pause(4000);

    //get the surname and check if it's identical with the surname in the list
    const inputSurname = await $('#mat-input-1');
    expect(inputSurname).toHaveValue(fullNameText);

    //get the name and check if it's identical with the surname in the list
    const inputName = await $('#mat-input-2');
    expect(inputName).toHaveValue(fullNameText);

    await browser.pause(15000);
  })
})