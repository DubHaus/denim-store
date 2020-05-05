import {ADD_CART_LIST_ITEM, SET_CART, SET_CART_IS_SHOW} from "./types";

export const setCartIsShow = () => {
  return {
    type: SET_CART_IS_SHOW
  }
}

export const addCartListItem = (item) => {
  return {
    type: ADD_CART_LIST_ITEM,
    payload: item
  }
}

export const setCart = (items) => {
  return {
    type: SET_CART,
    payload: items
  }
}