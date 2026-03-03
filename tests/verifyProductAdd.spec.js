const AddProduct = require('../Pages/AddProduct')
const{test, expect} = require('../fixtures/loginFixture')

test('add product flow', async ({ page }) => {
  const addProduct = new AddProduct(page);
  await addProduct.productAddition();
});
