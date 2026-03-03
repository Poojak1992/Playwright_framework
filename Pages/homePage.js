class Homepage{
    constructor(page) {

         this.page =page 
         this.homemenu = page.locator("a[class='nav-link']").first();
         this.name =page.locator("input[name='name']").first();
         this.Email =page.locator("input[name='email']")
         this.password =page.locator("#exampleInputPassword1");
         this.checkbox = page.locator("#exampleCheck1");
         this.genderselectio =page.locator("#exampleFormControlSelect1");
         this.status = page.locator("input[value='option1']")
         this.birthdate = page.locator("input[name='bday']")
         this.submit = page.locator("input[class='btn btn-success']")
         this.SuccessMsg = page.locator("div[class='alert alert-success alert-dismissible']");

    }
   
async fillDetails(user)

{
    await this.homemenu.click();
    await this.name.fill(user.UName);
    await this.Email.fill(user.UEmail);
    await this.password.fill(user.UPassword);
    await this.checkbox.check();
    await this.genderselectio.selectOption('Female');
    await this.status.click();
   await this.birthdate.fill("2020-02-10");

    await this.submit.click();
    const MSG = await this.SuccessMsg.last().textContent()
    console.log(MSG)
}


}
module.exports = Homepage;