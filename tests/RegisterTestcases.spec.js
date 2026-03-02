const { test, expect } = require('../fixtures/baseFixture');
test.describe.configure({ mode: 'parallel' });
const HomePage = require("../pages/HomePage");
const Register = require("../pages/Registeration");
const LoginPage = require("../pages/loginpage");
const users = require("../data/users.json");
const { generateUniqueEmail } = require("../utils/testData");

test('Registration and Login with same user', async ({ page }, testInfo) => {

  // Generate user ONCE
  const userData = {
    ...users.defaultUser,
    email: generateUniqueEmail(testInfo.workerIndex)
  };

  // ---------- Registration ----------

  const homepage = new HomePage(page);
  await homepage.navigateToMyAccount();
  await homepage.navigateToRegister();

  const register = new Register(page);// this is an object of class Register
  await register.fillTheRegisterInfo(userData);

  // ---------- Logout (important) ----------
  await homepage.navigateToMyAccount();
  await page.waitForTimeout(2000);
  await homepage.navigateToLogout();

  // ---------- Login ----------
  await homepage.navigateToMyAccount();
   await page.waitForTimeout(2000);
  await homepage.navigateToLogin();


  const loginPage = new LoginPage(page);

  await loginPage.enterLoginDetails(
    userData.email,          // SAME email used in registration
    userData.password        // Password from users.json
  );

});

test('inavlid data', async({page})=>{

   
  const homepage = new HomePage(page);
  await homepage.invalidTC();
// Test modification 

})
