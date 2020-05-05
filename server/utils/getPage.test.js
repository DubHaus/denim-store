const path = require('path');
const getPage = require('./getPage');
const { AMOUNT_PRODUCT_IN_PAGE } = require(path.join(__dirname, '../params.js'));

describe('backEnd : getPage', () => {
  const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  const pageNumber = 1;

  test('should return array', () => {
    expect(getPage(items, pageNumber)).toBeInstanceOf(Array);
  })

  test(`should return array with lenght less ${AMOUNT_PRODUCT_IN_PAGE}`, () => {
    let result = getPage(items, pageNumber);
    expect(result.length).toBeLessThanOrEqual(AMOUNT_PRODUCT_IN_PAGE);

    result = getPage(items, 2);
    expect(result.length).toBeLessThanOrEqual(AMOUNT_PRODUCT_IN_PAGE);
  })

  test(`if items amount less that ${AMOUNT_PRODUCT_IN_PAGE} shoud return right result.length`, () => {
    result = getPage(items, 2);
    const itemsLength = items.length - AMOUNT_PRODUCT_IN_PAGE;

    expect(result.length).toEqual(itemsLength);
  })

  test('if page is wrong should return empty arr', () => {
    result = getPage(items, 100);
    expect(result).toEqual([]);
  })
})