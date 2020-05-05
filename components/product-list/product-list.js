import {connect} from 'react-redux';

import ProductListItem from '../product-list-item';
import ProductListFilter from '../product-list-filter';
import {setProductListPage} from "../../store/actions/product-list";
import LoadingIndicator from "../loading-indicator";

const ProductList = ({
                       productList: {list, page, allCount, isLoading},
                       setProductListPage,
                     }) => {

  const onLoadMore = async () => {
    setProductListPage(page + 1);
  }

  const loadMoreBtn = allCount > (12 * page) && !isLoading ?
    <React.Fragment>
      <div className="product-list__load-more-count">Showing {list.length} of {allCount} items</div>
      <button onClick={onLoadMore} className=" black_btn product-list__btn_load">Load more items</button>
    </React.Fragment>

    :
    null;

  const content = isLoading ?
    (page > 1) ?
      <React.Fragment>
        {list.map(({...props}) => (
          <div key={props.id} className="col-6 col-sm-4 col-md-3">
            <ProductListItem key={props.id} {...props} />
          </div>
        ))}
       <LoadingIndicator/>
      </React.Fragment>
      : <LoadingIndicator/>
    :
    list.map(({...props}) => (
      <div key={props.id} className="col-6 col-sm-4 col-md-3">
        <ProductListItem key={props.id} {...props} />
      </div>
    ))

  return (
    <div className="product-list">
      <div className="container">
        <div className="product-list__filter">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 ml-auto">
              <ProductListFilter/>
            </div>
          </div>
        </div>
        <div className="product-list__items">
          <div className="row">
            {content}
          </div>
        </div>
      </div>
      {loadMoreBtn}
    </div>
  )
}

const mapStateToProps = state => ({
  productList: state.productList
});

const mapDispatchToProps = {
  setProductListPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);