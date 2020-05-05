import MainLayout from "../../components/main-layout"
import ProductItem from '../../components/product-item';
import {getProductItem, getRecomendation} from "../../api";
import RecomendationList from "../../components/redomendation";
import {setProductItem} from "../../store/actions";

const ItemPage = ({item, recomendations}) => {
  return (
    <MainLayout>
      <ProductItem/>
      <RecomendationList items={recomendations}/>
    </MainLayout>
  )
}

ItemPage.getInitialProps = async ({query, store}) => {
  const {id} = query;
  const item = await getProductItem(id);
  store.dispatch(setProductItem(item));

  const recomendations = await getRecomendation(id);

  return {
    item,
    recomendations
  }
}

export default ItemPage;