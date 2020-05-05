import {
  SET_PRODUCT_ITEM,
  CHANGE_PRODUCT_ITEM_COLOR,
  CHANGE_PRODUCT_ITEM_SIZE,
  INCREASE_PRODUCT_ITEM_COUNTER, DECREASE_PRODUCT_ITEM_COUNTER, RESET_PRODUCT_ITEM_PROPS
} from "./types";

export const setProductItem = (item) => {
  return {
    type: SET_PRODUCT_ITEM,
    payload: item
  }
}

export const changeProductItemColor = (color) => {
  return {
    type: CHANGE_PRODUCT_ITEM_COLOR,
    payload: color
  }
}

export const changeProductItemSize = (size) => {
  return {
    type: CHANGE_PRODUCT_ITEM_SIZE,
    payload: size
  }
}

export const increaseProductItemCounter = () => {
  return {
    type: INCREASE_PRODUCT_ITEM_COUNTER
  }
}

export const descreaseProductItemCounter = () => {
  return {
    type: DECREASE_PRODUCT_ITEM_COUNTER
  }
}

export const resetProductItemProps = () => {
  return {
    type: RESET_PRODUCT_ITEM_PROPS
  }
}