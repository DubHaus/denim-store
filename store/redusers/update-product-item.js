import {
  CHANGE_PRODUCT_ITEM_COLOR,
  CHANGE_PRODUCT_ITEM_SIZE,
  DECREASE_PRODUCT_ITEM_COUNTER,
  INCREASE_PRODUCT_ITEM_COUNTER, RESET_PRODUCT_ITEM_PROPS,
  SET_PRODUCT_ITEM
} from "../actions/types";

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      item: {},
      color: '',
      size: '',
      count: 0,
      cost: 0
    }
  }
  switch (action.type) {

    case SET_PRODUCT_ITEM:
      const item = action.payload;
      return {
        ...state,
        item,
        color: item.colors[0],
        size: item.sizes[0],
        count: 1,
        cost: item.price
      }

    case RESET_PRODUCT_ITEM_PROPS:
      return {
        ...state,
        color: state.item.colors[0],
        size: state.item.sizes[0],
        count: 1,
        cost: state.item.price
      }

    case CHANGE_PRODUCT_ITEM_COLOR:
      return {
        ...state,
        color: action.payload
      }

    case CHANGE_PRODUCT_ITEM_SIZE:
      return {
        ...state,
        size: action.payload
      }


    case INCREASE_PRODUCT_ITEM_COUNTER:
      const newCount = state.count + 1;
      return {
        ...state,
        count: newCount,
        cost: countNewItemCost(state.item.price, newCount)
      }

    case DECREASE_PRODUCT_ITEM_COUNTER:
      if (state.count > 1) {
        const newCount = state.count - 1;
        return {
          ...state,
          count: newCount,
          cost: countNewItemCost(state.item.price, newCount)
        }
      }
      return state;

    default:
      return state;
  }
}

const countNewItemCost = (price, newCount) => {
  return newCount * price;
}

export default reducer;