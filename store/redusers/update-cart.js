import {ADD_CART_LIST_ITEM, SET_CART, SET_CART_IS_SHOW} from "../actions/types";

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      isShow: false,
      list: [],
      cost: 0,
      count: 0
    }
  }

  switch (action.type) {

    case SET_CART_IS_SHOW:
      return {
        ...state,
        isShow: !state.isShow
      }

    case SET_CART:
      const allItems = action.payload;
      const cartCost = allItems.reduce((acc, el) => acc + el.cost, 0);
      const cartCount = allItems.reduce((acc, el) => acc + el.count, 0);
      return {
        ...state,
        list: allItems,
        cost: cartCost,
        count: cartCount
      }

    case ADD_CART_LIST_ITEM:
      const items = action.payload;
      const newItems = items.filter(itemsEl => !state.list.find(cartEl => cartEl.id === itemsEl.id));
      const newItemsCost = newItems.reduce((acc, el) => acc + el.cost, 0);
      const newItemsCount = newItems.reduce((acc, el) => acc + el.count, 0);
      return {
        ...state,
        list: [...state.list, ...newItems],
        cost: state.cost + newItemsCost,
        count: state.count + newItemsCount
      }

    default:
      return state;
  }

}

export default reducer;