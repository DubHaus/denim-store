const fs = require('fs');

const sentData = require('../../../server/utils/sentData');
const getProductsData = require('../../../server/utils/getProductsData');
const getDataBase = require('../../../server/utils/getDataBase');

const {products} = getDataBase();

export default(req, res) => {
  const data = getProductsData('female', req, products);
  sentData(data, res);
}