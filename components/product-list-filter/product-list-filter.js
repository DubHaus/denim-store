import FilterRadioList from '../filter-radio-list';
import ColorPicer from '../filter-color-picer';
import {WithDropDown} from '../hos-helpers';
import ProductListFilterItem from '../product-list-filter-item';
import {connect} from "react-redux";
import {setFilterCollection, setFilterColor, setFilterSortPrice} from "../../store/actions";
import {cleanFilter, setFilterIsActive} from "../../store/actions/filter";

const ProductListFilter = ({
                             show, setShow,
                             filter, setFilterSortPrice,
                             setFilterColor,
                             setFilterCollection, cleanFilter,
                             setFilterIsActive
                           }) => {
  const sortPriceList = [
    {
      value: 'recommendation',
      title: 'Recommendation'
    },
    {
      value: 'low-to-high',
      title: 'Price : Low to high'
    },
    {
      value: 'high-to-low',
      title: 'Price : High to low'
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

  const cleanHandler = e => {
    e.preventDefault();
    cleanFilter();
  }

  const submitHandler =  e => {
    e.preventDefault();
    setFilterIsActive(true);
  }

  const content = show ?
    <div className='product-list-filter__content'>
      <ProductListFilterItem title='Price'>
        <FilterRadioList list={sortPriceList} changeActive={setFilterSortPrice} active={filter.sortPrice}/>
      </ProductListFilterItem>
      <ProductListFilterItem title='Color'>
        <ColorPicer colors={[
          'white',
          'grey',
          'blue',
          'green',
          'light-blue',
          'black',
        ]} changeColor={setFilterColor} color={filter.color}/>
      </ProductListFilterItem>
      <ProductListFilterItem title='Collection'>
        <FilterRadioList list={collectionList} changeActive={setFilterCollection} active={filter.collection}/>
      </ProductListFilterItem>
      <button className="black_btn">Apply</button>
      <button onClick={cleanHandler} className="white_btn">Clear all</button>
    </div>
    : null;

  return (
    <form onSubmit={submitHandler} className={`product-list-filter ${show && 'show'}`}>
      <div onClick={setShow} className="product-list-filter__title">Filter by</div>
      {content}
    </form>
  )
}

const mapStateToProps = state => ({
  filter: state.filter
})

const mapDispatchToProps = {
  setFilterSortPrice,
  setFilterColor,
  setFilterCollection,
  cleanFilter,
  setFilterIsActive
}

export default connect(mapStateToProps, mapDispatchToProps)(WithDropDown(ProductListFilter)());