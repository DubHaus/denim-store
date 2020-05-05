import {
  ADD_ITEMS_TO_PRODUCT_LIST, SET_PRODUCT_ALL_COUNT, SET_PRODUCT_IS_LOADING,
  SET_PRODUCT_LIST,
  SET_PRODUCT_LIST_PAGE
} from "../actions/types";

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      list: [],
      page: 1,
      allCount: 0,
      isLoading: true
    };
  }

  switch (action.type) {

    case SET_PRODUCT_LIST:
      const {products, allCount} = action.payload;
      return {
        ...state,
        list: products,
        allCount
      }

    case ADD_ITEMS_TO_PRODUCT_LIST:
      return {
        ...state,
        list: [...state.list, ...action.payload.products]
      }

    case SET_PRODUCT_LIST_PAGE :
      return {
        ...state,
        page: action.payload
      }

    case SET_PRODUCT_ALL_COUNT:
      return {
        ...state,
        allCount: action.payload
      }

    case SET_PRODUCT_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
}

export default reducer;