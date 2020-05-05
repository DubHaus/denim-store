const {SERVER_BASE_URL} = require('../constants');
const fetch = require("node-fetch")

const _API_BASE_URL = `${SERVER_BASE_URL}/api`;

const makeRequest = async (url, method = 'GET', data) => {
  const requestData = {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }

  const response = await fetch(`${_API_BASE_URL}${url}`, method !== 'GET' ? requestData : {});
  return await response.json();
}

export const getProductList = async (page = 1, category = '', filter, search = '') => {

  let url = category && !search ?
    `/products/${category}?page=${page}`
    : `/products?page=${page}`;

  if(search) {
    url =`${url}&search=${search}`;
    return await makeRequest(url);
  }

  if(filter && filter.isActive) {
    url =`${url}&color=${filter.color}&sortprice=${filter.sortPrice}&collection=${filter.collection}`;
    return await makeRequest(url);
  }

  return await makeRequest(url);
}

export const getProductItem = async (id) => {
  return await makeRequest(`/products/${id}`);
}

export const getRecomendation = async (id) => {
  return await makeRequest(`/recomendation?id=${id}`)
}

export const addItemToCart = async (item) => {
  return await makeRequest(`/cart`, 'POST', item);
}

export const getCart = async () => {
  return await makeRequest('/cart');
}

export const deleteCartItem = async (id) => {
  return await makeRequest('/cart', 'DELETE', {id});
}

export const searchItems = async (str, category = '') => {
  return category ?
    await makeRequest(`/products/${category}?search=${str}`)
    : await makeRequest(`/products?search=${str}`);
}

// export const getFilteredItems = async ({color, sortPrice, collection}, category = '') => {
//   return category ?
//     await makeRequest(`/products/${category}?color=${color}&sortprice=${sortPrice}&collection=${collection}`)
//     : await makeRequest(`/products?color=${color}&sortprice=${sortPrice}&collection=${collection}`);
// }