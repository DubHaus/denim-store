import {SET_SEARCH_IS_ACTIVE, SET_SEARCH_IS_OPEN, SET_SEARCH_STRING} from "../actions/types";

const reducer = (state, action) => {
  if(state === undefined) {
    return {
      string: '',
      lastSearch: '',
      isOpen: false,
      isActive: false
    };
  }

  switch (action.type) {

    case SET_SEARCH_IS_OPEN:
      const newString = action.payload ? state.string : '';
      return {
        ...state,
        isOpen: action.payload,
        string: newString
      }

    case SET_SEARCH_STRING:
      return {
        ...state,
        string: action.payload
      }

    case SET_SEARCH_IS_ACTIVE:
      return {
        ...state,
        isActive: action.payload,
        lastSearch: state.string
      }

    default:
      return state;
  }
}

export default reducer;