const { Router } = require('express');

const sentData = require('../utils/sentData');
const getDataBase = require('../utils/getDataBase');
const getGETParams = require('../utils/getGETParams');
const findItemInArr = require('../utils/findItemInArr');

const router = new Router();

router.get('/', (req, res) => {
  const { id } = getGETParams(req.url, 'id');
  const { products } = getDataBase();
  const item = findItemInArr(products, id);

  const recomendationItems = getRecomendation(item, products, 4);
  sentData(recomendationItems, res);
})

const getRecomendation = (item, items, range) => {
  return items.filter(el => {
    return item.category === el.category && item.sex === el.sex;
  }).slice(0, range);
}

module.exports = router;