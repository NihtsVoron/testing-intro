const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {

   test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    const category ='all';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    let category;
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    let category='';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const expectIds = [{ id: 1 }, { id: 2 }];
    let category='electronics';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const expectIds = [{ id: 3 }, { id: 6 }];
    let category='books';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const expectIds = [{ id: 4 }, { id: 5 }];
    let category='home';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });


  test("'clothes' возвращает пустой массив", () => {
    const expectIds = [];
    let category='clothes';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'toys' возвращает пустой массив", () => {
    const expectIds = [];
    let category='toys';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });

  test("'sports' возвращает пустой массив", () => {
    const expectIds = [];
    let category='sports';
    var catalog = filterByCategory(products, category).map(x => ({ id: x.id }));
    expect(catalog).toEqual(expectIds);
  });
});
