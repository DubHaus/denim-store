import FilterRadioList from '../filter-radio-list';
import FilterColorPicer from '../filter-color-picer';
import DropDown from '../drop-down';
import ProductListFilterItem from '../product-list-filter-item';

const ProductListFitler = ({ show, setShow }) => {
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


  const content = show ?
    <div className='product-list-filter__content'>
      <ProductListFilterItem title='Price'>
        <FilterRadioList list={sortPriceList} />
      </ProductListFilterItem>
      <ProductListFilterItem title='Color'>
        <FilterColorPicer colors={[
          'white',
          'grey',
          'blue',
          'green',
          'light-blue',
          'black',
        ]} />
      </ProductListFilterItem>
      <ProductListFilterItem title='Collection'>
        <FilterRadioList list={collectionList} />
      </ProductListFilterItem>
      <button className="black_btn">Apply (9 products)</button>
      <button className="white_btn">Clear all</button>
    </div>
    : null;

  return (
    <form className={`product-list-filter ${show && 'show'}`}>
      <div onClick={setShow} className="product-list-filter__title">Filter by</div>
      {content}
    </form>
  )
}

export default DropDown(ProductListFitler)();