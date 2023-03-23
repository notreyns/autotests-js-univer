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
    const fullName = await $('.crm-navigator-table__row:nth-child(1) td:nth-child(1) div span');
    const fullNameText = await fullName.getText();

    const firstRow = await $('.crm-navigator-table__row:nth-child(1) td:nth-child(1)');
    firstRow.click();
    await browser.pause(4000);

    const inputSurname = await $('#mat-input-1');
    expect(inputSurname).toHaveValue(fullNameText);

    const inputName = await $('#mat-input-2');
    expect(inputName).toHaveValue(fullNameText);

    await browser.pause(15000);
  })
})