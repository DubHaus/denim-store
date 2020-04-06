import FilterSortPrice from '../filter-radio-list';
import FilterColorPicer from '../filter-color-picer';
import DropDown from '../drop-down';

const ProductListFitler = (props) => {
  const sortPriceList = [
    {
      value: 'recommendation',
      title: 'Recommendation'
    },
    {
      value: 'low_to_hight',
      title: 'Price : Low to hight'
    },
    {
      value: 'hight_to_low',
      title: 'Price : Hight to low'
    }
  ]

  const collectionList = [
    {
      value: 'casual',
      title: 'Casual'
    },
    {
      value: 'petite',
      title: 'Petite'
    },
    {
      value: 'classic',
      title: 'Classic'
    },
    {
      value: 'soulluxe',
      title: 'Soulluxe'
    },
  ]

  return (
    <form className="product-list-filter">
      <DropDown>
        <div className="product-list-filter__title">Filter by</div>
        <div className='product-list-filter__content'>
          <ProductListFilterItem title='Price'>
            <FilterSortPrice list={sortPriceList} />
          </ProductListFilterItem>
          <ProductListFilterItem title='Color'>
            <FilterColorPicer />
          </ProductListFilterItem>
          <ProductListFilterItem title='Collection'>
            <FilterSortPrice list={collectionList} />
          </ProductListFilterItem>
          <button className="black_btn">Apply (9 products)</button>
          <button className="white_btn">Clear all</button>
        </div>
      </DropDown>
    </form>
  )
}

const ProductListFilterItem = ({ title, children }) => (
  <DropDown>
    <div className="product-list-filter__item">
      <div className="product-list-filter__item_title">{title}</div>
      {children}
    </div>
  </DropDown>
)


export default ProductListFitler;