const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const expectIds = [{ id: 1 }];
    const query ='Наушники';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const expectIds = [{ id: 6 }];
    const query ='Чистый код';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const expectIds = [{ id: 4 }];
    const query ='Настольная лампа';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const expectIds = [{ id: 3 }];
    const query ='javascript';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 3", () => {
    const expectIds = [{ id: 5 }];
    const query ='ЧЕХОЛ';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const expectIds = [{ id: 1 }];
    const query ='наушники';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    const query ='';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    const query ='         ';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    const query ='\t\n';
    var catalog = searchProducts(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });
});
