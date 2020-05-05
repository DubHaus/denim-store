import LayoutWithBreadCrumbs from '../../components/layout-with-breadcrumbs';
import ProductList from '../../components/product-list';
import {setCategory} from "../../store/actions/category";
import {setProductList} from "../../store/actions";

const Product = () => {
  return (
    <LayoutWithBreadCrumbs>
      <ProductList/>
    </LayoutWithBreadCrumbs>
  )
}

Product.getInitialProps = async ({store}) => {
  await store.dispatch(setCategory(''));
  await store.dispatch(setProductList());
  return {};
}


export default Product;
