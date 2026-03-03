class AddProduct {
  constructor(page) {
    this.page = page;// to initialize scope 

    this.addIphone = page.locator("button.btn.btn-info").first();
    this.checkout1 = page.locator("a.nav-link.btn.btn-primary");
    this.checkout2 = page.locator("button.btn.btn-success");

    this.countryInput = page.locator("#country");
    this.purchase = page.locator("input[type='submit']");
    this.Message = page.locator("div[class='alert alert-success alert-dismissible']");
  }

  async productAddition() {
    await this.addIphone.click();
    await this.checkout1.click();
    await this.checkout2.click();

    await this.countryInput.fill('India');
    await this.purchase.click();
    await this.page.waitForSelector("div.alert-success.alert-dismissible");
   const lastMessage = await this.Message.last().textContent();
    console.log(lastMessage);
    
  }
}

module.exports = AddProduct;
