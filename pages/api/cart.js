const { v4: generateId } = require('uuid');

const sentData = require('./../../server/utils/sentData');
const getDataBase = require('./../../server/utils/getDataBase');
const sendErrToClient = require('./../../server/utils/sendErr');
const refreshDataBase = require('./../../server/utils/refreshDataBase');
const findItemInArr = require('./../../server/utils/findItemInArr');

export default (req, res) => {

  switch (req.method) {

    case 'POST':
      cardPostHandler(req,res);
      break;

    case 'DELETE':
      cartDeleteHandler(req, res);
      break;

    case 'PUT':
      cartPutHandler(req,res);
      break;

    default:
      const { cart } = getDataBase();
      sentData(cart, res);
  }
}

const cartPutHandler = (req, res) => {
  const params = req.body;
  const { cart } = getDataBase();

  const newCart = changeItemInCart(params, cart);
  refreshDataBase({ cart: newCart });
  sentData(newCart, res);
}

const cartDeleteHandler = (req,res) => {
  const { id } = req.body;
  const { cart } = getDataBase();

  const newCart = deleteItemFromCart(id, cart);
  refreshDataBase({ cart: newCart });
  sentData(newCart, res);
}

const cardPostHandler = (req, res) => {
  const params = req.body;
  const { cart, products } = getDataBase();
  const item = findItemInArr(products, params.id);
  if (!item) {
    sendErrToClient(res, 404, "Didn't find item in product, probable wrong id in request");
  } else {
    const newCart = addItemToCart(item, params, cart);
    refreshDataBase({ cart: newCart });
    sentData(newCart, res, 201);
  }
}


const changeItemInCart = (params, cart) => {
  const itemId = cart.findIndex(item => item.id === params.id);
  const item = cart[itemId];
  const newItem = { ...item, ...params };
  return itemId === -1 ?
    cart
    : [...cart.slice(0, itemId), newItem, ...cart.slice(itemId + 1)];
}

const deleteItemFromCart = (id, cart) => {
  const itemId = cart.findIndex(item => item.id === id);
  return itemId === -1 ?
    cart
    : [...cart.slice(0, itemId), ...cart.slice(itemId + 1)];
}

const addItemToCart = ({ id, name, images, price }, { color, size, count = 1 }, cart) => {
  const newItem = {
    id: `${generateId()}`,
    itemId: id,
    name,
    image: images[0],
    color,
    size,
    price,
    count,
    cost: calcCost(price, count)
  }
  return [...cart, newItem]
}

const calcCost = (price, count) => price * count;