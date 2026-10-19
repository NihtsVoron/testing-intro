const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {

   test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const expectIds = [{ id: 3 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 2 }, { id: 1 }];
    const query ='asc';
    var catalog = sortProductsByPrice(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const expectIds = [{ id: 3 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 2 }, { id: 1 }];
    var catalog = sortProductsByPrice(products).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const expectIds = [{ id: 3 }, { id: 4 }, { id: 1 }];
    const testProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const query ='asc';
    var catalog = sortProductsByPrice(testProducts, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 3 }];
    const query ='desc';
    var catalog = sortProductsByPrice(products, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });


  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const expectIds = [{ id: 1 }, { id: 4 }, { id: 3 }];
    const testProducts = products.filter(({ id }) => [3, 1, 4].includes(id));
    const query ='desc';
    var catalog = sortProductsByPrice(testProducts, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const expectIds = [{ id: 2 }, { id: 5 }, { id: 6 }];
    const testProducts = products.filter(({ id }) => [5, 2, 6].includes(id));
    const query ='desc';
    var catalog = sortProductsByPrice(testProducts, query).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const expectIds = [{ id: 1 }, { id: 3 }, { id: 4 }];
    const testProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const query ='asc';
    var catalog = sortProductsByPrice(testProducts, query);
    expect(testProducts.map(x => ({ id: x.id }))).toEqual(expectIds);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const expectIds = [{ id: 1 }, { id: 3 }, { id: 4 }];
    const testProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const query ='desc';
    var catalog = sortProductsByPrice(testProducts, query);
    expect(testProducts.map(x => ({ id: x.id }))).toEqual(expectIds);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const expectIds = products.map(x => ({ id: x.id }));
    var catalog = sortProductsByPrice(products);
    expect(products.map(x => ({ id: x.id }))).toEqual(expectIds);
  });
});
