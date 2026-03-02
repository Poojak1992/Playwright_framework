class HomePage {

constructor(page){
    this.page=page
    this.myAccount= page.locator("a[title='My Account']")
    this.register =page.locator('a',{hasText:'Register'})
    this.negTC= page.locator("a[title='My t']")
    this.login =page.locator('a',{hasText:'Login'}).first();
    this.logout = page.locator("a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/logout']:nth-child(1)")

}
async navigateToMyAccount()
{
   await this.myAccount.click()
}
 async navigateToRegister()
{
  await this.register.click();
}
async navigateToLogin()

{
  await this.login.click();
}
async navigateToLogout()
{
  await this.logout.click();
}
async invalidTC()
{
  await this.negTC.click()
}

}
module.exports= HomePage;

