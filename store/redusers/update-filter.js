import {
  SET_FILTER_COLLECTION,
  SET_FILTER_COLOR,
  SET_FILTER_SORT_PRICE,
  CLEAN_FILTER,
  SET_FILTER_IS_ACTIVE
} from "../actions/types";

const reducer = (state, action) => {
  const initState =  {
    sortPrice: 'recommendation',
    color: '',
    collection: '',
    isActive: false
  }
  if(state === undefined) {
    return {... initState}
  }

  switch (action.type) {

    case SET_FILTER_COLOR:
      return {
        ...state,
        color: action.payload
      }

    case SET_FILTER_SORT_PRICE:
      return {
        ...state,
        sortPrice: action.payload
      }

    case SET_FILTER_COLLECTION:
      return {
        ...state,
        collection: action.payload
      }

    case CLEAN_FILTER:
      return {...initState}

    case SET_FILTER_IS_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      }

    default:
      return state
  }
}

export default reducer;