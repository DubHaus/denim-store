const path = require('path');

const { AMOUNT_PRODUCT_IN_PAGE } = require('../params.js');


const getPage = (items, pageNumber, amount = AMOUNT_PRODUCT_IN_PAGE) => {
  if (!pageNumber) pageNumber = 1;
  return items.slice(startPos(pageNumber, amount), endPos(pageNumber, amount, items.length));
}


const startPos = (pageNumber, amount) => {
  return pageNumber === 1 ?
    0
    : countPos(pageNumber - 1, amount);
}

const endPos = (pageNumber, amount, length) => {
  const position = countPos(pageNumber, amount);
  return position > length ? length : position;
}

const countPos = (pageNumber, amount) => pageNumber * amount;

module.exports = getPage;