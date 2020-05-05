import MainLayout from '../components/main-layout';
import MainFirstScreen from '../components/main-first-screen';
import DropList from '../components/drop-list';
import SpecialOffer from '../components/special-offer';
import SaleItem from '../components/sale-item';
import CategoryItem from '../components/category-item';
import ProductListItem from '../components/product-list-item';

export default () => {
  const products = [
    {
      id: 1,
      images: ['/img/products/product-1-1.webp'],
      name: 'Jacket',
      price: 50
    },
    {
      id: 2,
      images: ['/img/products/product-3-1.webp'],
      name: 'Jacket',
      price: 50
    },
    {
      id: 3,
      images: ['/img/products/product-5-1.webp'],
      name: 'Jacket',
      price: 50
    },
    {
      id: 4,
      images: ['/img/products/product-8-1.webp'],
      name: 'Jacket',
      price: 50
    }
  ]
  return (
    <MainLayout>
      <MainFirstScreen/>
      <DropList title='Bestsellers'>
        {products.map(props => <ProductListItem key={props.id} {...props} />)}
      </DropList>
      <SpecialOffer/>
      <DropList title='Shop by category'>
        <CategoryItem img='/img/category_jeans.png'/>
        <CategoryItem img='/img/category_shirt.png'/>
        <CategoryItem img='/img/category_jeans.png'/>
        <CategoryItem img='/img/category_shirt.png'/>
      </DropList>
    </MainLayout>
  )
}