import {
  ADD_ITEMS_TO_PRODUCT_LIST, CLEAN_FILTER, SET_CATEGORY,
  SET_FILTER_IS_ACTIVE, SET_PRODUCT_IS_LOADING,
  SET_PRODUCT_LIST,
  SET_PRODUCT_LIST_PAGE, SET_SEARCH_IS_ACTIVE
} from "./actions/types";
import {setProductList} from "./actions";
import {getProductList} from "../api";
import {setFilterIsActive} from "./actions/filter";
import {setProductListIsLoading} from "./actions/product-list";

const ProductListMiddleware = state => next => async action => {
  const store = state.getState();
  switch (action.type) {

    case SET_CATEGORY:
      next(action);
      next({
        type: SET_PRODUCT_LIST_PAGE,
        payload: 1
      })
      next({
        type: CLEAN_FILTER
      })
      next({
        type: SET_SEARCH_IS_ACTIVE,
        payload: false
      })
      break;

    case CLEAN_FILTER:
      next(action);
      state.dispatch(setProductList())
      break;

    case SET_PRODUCT_LIST_PAGE:
      next(action);
      state.dispatch(setProductList());
      break;

    case SET_PRODUCT_LIST:
      state.dispatch(setProductListIsLoading(true));
      const {productList: {page}, category, filter, search} = store;
      const data = await getProductList(page, category, filter, search.lastSearch);

      if (page > 1) {
        next({
          type: ADD_ITEMS_TO_PRODUCT_LIST,
          payload: data
        });
        next(setProductListIsLoading(false));
      } else {
        next({
          type: SET_PRODUCT_LIST,
          payload: data
        });
        next(setProductListIsLoading(false));
      }
      break;

    case SET_FILTER_IS_ACTIVE:
      next({
        type: SET_PRODUCT_LIST_PAGE,
        payload: 1
      })
      next(action);
      state.dispatch(setProductList())
      break;

    case SET_SEARCH_IS_ACTIVE:
      next(action);

    default:
      next(action);
  }
}

export default ProductListMiddleware;