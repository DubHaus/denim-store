import {
  ADD_ITEMS_TO_PRODUCT_LIST, SET_PRODUCT_ALL_COUNT, SET_PRODUCT_IS_LOADING,
  SET_PRODUCT_LIST,
  SET_PRODUCT_LIST_IS_LOAD_MORE,
  SET_PRODUCT_LIST_PAGE
} from "./types";

export const setProductList = () => {
  return {
    type: SET_PRODUCT_LIST
  }
}

export const setProductListAllCount = (count) => {
  return {
    type: SET_PRODUCT_ALL_COUNT,
    payload: count
  }
}

export const setProductListPage = page => {
  return {
    type: SET_PRODUCT_LIST_PAGE,
    payload: page
  }
}

export const setProductListIsLoading = isLoading => {
  return {
    type: SET_PRODUCT_IS_LOADING,
    payload: isLoading
  }
}

export const addItemsToProductList = items => {
  return {
    type: ADD_ITEMS_TO_PRODUCT_LIST,
    payload: items
  }
}

export const setProductListIsLoadMore = isLoadMore => {
  return {
    type: SET_PRODUCT_LIST_IS_LOAD_MORE,
    payload: isLoadMore
  }
}