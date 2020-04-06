import MainLayout from '../components/main-layout';
import MainFirstScreen from '../components/main-first-screen';
import DropList from '../components/drop-list';
import SpecialOffer from '../components/special-offer';
import SaleItem from '../components/sale-item';
import CategoryItem from '../components/category-item';

export default () => (
  <MainLayout>
    <MainFirstScreen />
    <DropList title='Bestsellers'>
      <SaleItem />
      <SaleItem />
      <SaleItem />
      <SaleItem />
      <SaleItem />
    </DropList>
    <SpecialOffer />
    <DropList title='Shop by category'>
      <CategoryItem img='/img/category_jeans.png' />
      <CategoryItem img='/img/category_shirt.png' />
      <CategoryItem img='/img/category_jeans.png' />
      <CategoryItem img='/img/category_shirt.png' />
    </DropList>
  </MainLayout>
)