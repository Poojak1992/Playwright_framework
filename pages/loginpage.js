class LoginPage{

    constructor(page){
        this.page=page
        this.EmailID = page.locator("#input-email");
        this.Password =page.locator("#input-password");
        this.loginButton = page.locator("input[value='Login']");
    }
    async enterLoginDetails(email, password){

        await this.EmailID.fill(email);
        await this.Password.fill(password);
        await this.loginButton.click();

    }
}
module.exports=LoginPage;