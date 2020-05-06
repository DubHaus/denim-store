const getPage = require('./getPage');
const getGETParams = require('./getGETParams');
const searchItems = require("./search-items");
const filterProducts = require('./filterProduct');
const sortItemsByPrice = require('./sort-items-by-pice');

const getProductsData = (category = '', req, products) => {
  const { page: pageNumber, search: searchText, sortprice: sortPrice, color, collection } =
    getGETParams(req.url, 'page', 'search', 'sortprice', 'color', 'collection');

  const searchedItems = searchItems(searchText, products);

  const categoryProducts = category ? products.filter(el => el.sex === category) : products;

  const filterItems = filterProducts(categoryProducts, ['colors', color], ['collection', collection]);

  const sortItems = sortItemsByPrice(filterItems, sortPrice);

  const pageData = searchText ?
    { products: getPage(searchedItems, pageNumber), allCount: searchedItems.length }
    : { products: getPage(sortItems, pageNumber), allCount: filterItems.length };

  return pageData;
}

module.exports = getProductsData;