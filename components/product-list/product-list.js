import ProductListFilter from '../product-list-filter';

const ProductList = props => {
  return (
    <div className="product-list">
      <div className="container">
        <div className="row">
          <div className="col-3 ml-auto">
            <ProductListFilter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList;