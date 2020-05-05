const express = require('express');
const { Router } = require('express');
const { v4: generateId } = require('uuid');

const sentData = require('../utils/sentData');
const sendErrToClient = require('../utils/sendErr');
const refreshDataBase = require('../utils/refreshDataBase');
const getDataBase = require('../utils/getDataBase');
const findItemInArr = require('../utils/findItemInArr');

const router = new Router();
router.use(express.json())


router.get('/', (req, res) => {
  const { cart } = getDataBase();
  sentData(cart, res);
})

router.post('/', (req, res) => {
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
})

router.delete('/', (req, res) => {
  const { id } = req.body;
  const { cart } = getDataBase();

  const newCart = deleteItemFromCart(id, cart);
  refreshDataBase({ cart: newCart });
  sentData(newCart, res);
})

router.put('/', (req, res) => {
  const params = req.body;
  const { cart } = getDataBase();

  const newCart = changeItemInCart(params, cart);
  refreshDataBase({ cart: newCart });
  sentData(newCart, res);
})


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



module.exports = router;