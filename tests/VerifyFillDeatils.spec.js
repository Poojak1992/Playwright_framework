const Homepage =require('../Pages/homePage')
const{test, expect}= require('../fixtures/loginFixture')
const userData =require('../data/userData.json')

test('fill user Details flow', async({page}, testInfo) => {

    const homepage =new Homepage(page)
    await homepage.fillDetails(userData.UserData);



})