import {SET_CATEGORY} from "./types";

export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}