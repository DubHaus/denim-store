import {combineReducers} from 'redux'

import updateProductList from './update-product-list';
import updateCart from './update-cart';
import updateProductItem from './update-product-item';
import updateSearch from './update-search'
import updateFilter from  './update-filter'
import updateCategory from './update-category';

const reducer = combineReducers({
    productList: updateProductList,
    cart: updateCart,
    productItem: updateProductItem,
    search: updateSearch,
    filter: updateFilter,
    category: updateCategory
  }
)

export default reducer;