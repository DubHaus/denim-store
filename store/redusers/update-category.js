import {SET_CATEGORY} from "../actions/types";

const reducer = (state, action) => {
  if(state === undefined) return '';

  switch (action.type) {

    case SET_CATEGORY:
      return action.payload

    default:
      return state
  }
}

 export default reducer;