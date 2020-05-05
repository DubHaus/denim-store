import Link from 'next/link';

const CategoryItem = ({ img }) => {
  return (
    <Link href='/'>
      <a className="category-list-item">
        <img className='category-list-item_img' src={img} />
        <h5 className='category-list-item_title'>Jacket</h5>
      </a>
    </Link>
  )

}

export default CategoryItem;