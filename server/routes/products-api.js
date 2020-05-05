const {Router} = require('express');
const fs = require('fs');
const path = require('path');

const getPage = require('../utils/getPage');
const getGETParams = require('../utils/getGETParams');
const getGETPathId = require('../utils/getGETPathId');
const sentData = require('../utils/sentData');
const sendErr = require('../utils/sendErr');
const searchItems = require("../utils/search-items");
const filterProducts = require('../utils/filterProduct');
const sortItemsByPrice = require('../utils/sort-items-by-pice');

const router = new Router();

const dataFile = fs.readFileSync(path.join(__dirname, '../database.json'));
const {products} = JSON.parse(dataFile);

router.get('/', (req, res) => {
  const data = getProductsData('', req, products);
  sentData(data, res);
})

router.get('/man', (req, res) => {
  const data = getProductsData('male', req, products);
  sentData(data, res);
})

router.get('/woman', (req, res) => {
  const data = getProductsData('female', req, products);
  sentData(data, res);
})


router.get('/:id', (req, res) => {
  const id = getGETPathId(req.url);
  const item = products.find(el => el.id == id);
  if (item) sentData(item, res);
  else sendErr(res, 404, 'Didnt find item : wrong id');
})


const getProductsData = (category = '', req, products) => {
  const {page: pageNumber, search: searchText, sortprice: sortPrice, color, collection} =
    getGETParams(req.url, 'page', 'search', 'sortprice', 'color', 'collection');

  const searchedItems = searchItems(searchText, products);

  const categoryProducts = category ? products.filter(el => el.sex === category) : products;

  const filterItems = filterProducts(categoryProducts, ['colors', color], ['collection', collection]);

  const sortItems = sortItemsByPrice(filterItems, sortPrice);

  const pageData = searchText ?
    {products: getPage(searchedItems, pageNumber), allCount : searchedItems.length }
    : {products: getPage(sortItems, pageNumber), allCount: filterItems.length};

  return pageData;
}


module.exports = router;