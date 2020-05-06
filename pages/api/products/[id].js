const getGETPathId = require('../../../server/utils/getGETPathId');
const getDataBase = require('../../../server/utils/getDataBase');
const sentData = require('../../../server/utils/sentData');
const sendErr = require('../../../server/utils/sendErr');

const {products} = getDataBase();

export default (req, res) => {
  const id = getGETPathId(req.url);
  const item = products.find(el => el.id == id);
  if (item) sentData(item, res);
  else sendErr(res, 404, 'Didnt find item : sent wrong id');
}