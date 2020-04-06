import Link from 'next/link';

const SaleItem = props => (
  <div className="col-3">
    <Link href='/'>
      <a className="sale-list-item">
        <img className='sale-list-item_img' src='/img/denim_jacket.png' />
        <h5 className='sale-list-item_title'>Jacket</h5>
        <span className='sale-list-item_price'>$ 120</span>
      </a>
    </Link>
  </div>
)

export default SaleItem;