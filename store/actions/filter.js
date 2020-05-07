import {
  CLEAN_FILTER,
  SET_FILTER_COLLECTION,
  SET_FILTER_COLOR,
  SET_FILTER_IS_ACTIVE,
  SET_FILTER_SORT_PRICE,
  SET_FILTER_IS_OPEN
} from "./types";

export const setFilterColor = color => {
  return {
    type: SET_FILTER_COLOR,
    payload: color
  }
}

export const setFilterSortPrice = sort => {
  return {
    type: SET_FILTER_SORT_PRICE,
    payload: sort
  }
}

export const setFilterCollection = collection => {
  return {
    type: SET_FILTER_COLLECTION,
    payload: collection
  }
}

export const setFilterIsActive = isActive => {
  return {
    type: SET_FILTER_IS_ACTIVE,
    payload: isActive
  }
}

export const cleanFilter = () => {
  return {
    type: CLEAN_FILTER
  }
}

export const setFilterIsOpen = isOpen => {
  return {
    type: SET_FILTER_IS_OPEN,
    payload: isOpen
  }
}