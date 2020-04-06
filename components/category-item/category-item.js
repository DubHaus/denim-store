import Link from 'next/link';

const CategoryItem = ({img}) => {
  return (
    <div className="col-3">
      <Link href='/'>
        <a className="category-list-item">
          <img className='category-list-item_img' src={img} />
          <h5 className='category-list-item_title'>Jacket</h5>
        </a>
      </Link>
    </div>
  )

}

export default CategoryItem;