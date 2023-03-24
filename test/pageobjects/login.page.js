const Page = require('./page');

class LoginPage extends Page{
    get usernameField () { return $('input[name="userName"]') }
    get passwordField () { return $('input.password') }
    get loginButton () { return $('button[type="submit"]') }

    async doLogin(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
        //await expect(browser).toHaveUrlContaining('clients');
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
