import Link from 'next/link';

const ProductListItem = ({ id, images, name, price }) => (
  <div className="product-list-item">
    <Link href={`/products/${id}`}>
      <a>
        <img className='product-list-item__img' src={images[0]} />
        <h4 className="product-list-item__title">{name}</h4>
        <span className="product-list-item__price">$ {price}</span>
      </a>
    </Link>
  </div>
)

export default ProductListItem;