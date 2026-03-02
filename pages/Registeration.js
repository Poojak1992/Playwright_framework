class Register {
    constructor(page){ 
        this.page = page
        this.Firstname = page.locator("#input-firstname");
        this.Lastname = page.locator("#input-lastname");
        this.EnterEmail = page.locator("#input-email");
        this.EnterPh = page.locator("#input-telephone");
        this.EnterPassword = page.locator("#input-password");
        this.ConfirmPass = page.locator("#input-confirm");
        this.radiobutton = page.locator("input[value='0']");
        this.policy = page.locator("input[name='agree']");
        this.continue = page.locator("input[value='Continue']");
    }

    async fillTheRegisterInfo(user) {
        await this.Firstname.fill(user.firstName);
        await this.Lastname.fill(user.lastName);
        await this.EnterEmail.fill(user.email);
        await this.EnterPh.fill(user.phone);
        await this.EnterPassword.fill(user.password);
        await this.ConfirmPass.fill(user.password);
        await this.radiobutton.click();
        await this.policy.click();
        await this.continue.click();
    }
}

module.exports = Register;
