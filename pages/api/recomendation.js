
const sentData = require('./../../server/utils/sentData');
const getDataBase = require('./../../server/utils/getDataBase');
const getGETParams = require('./../../server/utils/getGETParams');
const findItemInArr = require('./../../server/utils/findItemInArr');

export default (req, res) => {
  const { id } = getGETParams(req.url, 'id');
  const { products } = getDataBase();
  const item = findItemInArr(products, id);

  const recomendationItems = getRecomendation(item, products, 4);
  sentData(recomendationItems, res);
}

const getRecomendation = (item, items, range) => {
  return items.filter(el => {
    return item.category === el.category && item.sex === el.sex;
  }).slice(0, range);
}