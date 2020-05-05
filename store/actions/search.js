import {SET_SEARCH_IS_ACTIVE, SET_SEARCH_IS_OPEN, SET_SEARCH_STRING} from "./types";

export const setSearchIsOpen = (isOpen) => ({
  type: SET_SEARCH_IS_OPEN,
  payload: isOpen
})

export const setSearchString = (str) => ({
  type: SET_SEARCH_STRING,
  payload: str
})

export const setSearchIsActive = isActive => ({
  type: SET_SEARCH_IS_ACTIVE,
  payload: isActive
})