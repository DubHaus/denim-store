import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './redusers';
import ProductListMiddleware from "./product-list-middleware";

const initStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      ProductListMiddleware
    ))
  );
}

export default initStore;