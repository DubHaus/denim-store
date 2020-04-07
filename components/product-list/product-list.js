import Link from 'next/link';
import ProductListFilter from '../product-list-filter';

const ProductList = props => {
  const products = [
    {
      id: 1,
      img: '/img/item_1.png',
      title: 'Jacket',
      price: 50
    },
    {
      id: 2,
      img: '/img/item_1.png',
      title: 'Jacket',
      price: 50
    },
    {
      id: 3,
      img: '/img/item_1.png',
      title: 'Jacket',
      price: 50
    },
    {
      id: 4,
      img: '/img/item_1.png',
      title: 'Jacket',
      price: 50
    }
  ]
  return (
    <div className="product-list">
      <div className="container">
        <div className="row">
          <div className="col-3 ml-auto">
            <ProductListFilter />
          </div>
        </div>
        <div className="row">
          {products.map(({ ...props }) => (
            <div key={props.id} className="col-3">
              <ProductListItem  {...props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProductListItem = ({ id, img, title, price }) => (
  <div className="product-list-item">
    <Link href={`./${id}`}>
      <a>
        <img src={img} alt='product-1' />
        <h4 className="product-list-item__title">{title}</h4>
        <span className="product-list-item__price">$ {price}</span>
      </a>
    </Link>
  </div>
)

export default ProductList;