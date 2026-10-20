const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {

  test("ID 1 возвращает products[0]", () => {
    var product = getProductById(products, 1);
    expect(product).toEqual(products[0]);
  });

  test("ID 4 возвращает products[3]", () => {
    var product = getProductById(products, 4);
    expect(product).toEqual(products[3]);
  });

  test("ID 6 возвращает products[5]", () => {
    var product = getProductById(products, 6);
    expect(product).toEqual(products[5]);
  });

  test("ID 0 возвращает null", () => {
    var product = getProductById(products, 0);
    expect(product).toEqual(null);
  });

  test("ID 999 возвращает null", () => {
    var product = getProductById(products, 999);
    expect(product).toEqual(null);
  });

  test("ID -1 возвращает null", () => {
    var product = getProductById(products, -1);
    expect(product).toEqual(null);
  });

  test("строковый ID '1' возвращает null", () => {
    var product = getProductById(products, '1');
    expect(product).toEqual(null);
  });

  test("ID undefined возвращает null", () => {
    var product = getProductById(products, undefined);
    expect(product).toEqual(null);
  });

  test("ID NaN возвращает null", () => {
    var product = getProductById(products, NaN);
    expect(product).toEqual(null);
  });
});
