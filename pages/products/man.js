import LayoutWithBreadCrumbs from '../../components/layout-with-breadcrumbs';
import ProductList from '../../components/product-list';
import {setProductList} from '../../store/actions';
import {setCategory} from "../../store/actions/category";

const Product = () => {
  return (
    <LayoutWithBreadCrumbs>
      <ProductList/>
    </LayoutWithBreadCrumbs>
  )
}

Product.getInitialProps = async ({store}) => {
  await store.dispatch(setCategory('man'))
  await store.dispatch(setProductList())
  return {};
}


export default Product;
