const LoginPage = require("../pageobjects/login.page");
const ClientPage = require("../pageobjects/client.page");


describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create full client', async ()=> {
        await ClientPage.createFullClient()
    })
    
})
