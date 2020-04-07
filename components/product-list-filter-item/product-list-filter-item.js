import DropDown from '../drop-down';

const ProductListFilterItem = ({ title, children, show, setShow }) => {
  return (
    <div className={`product-list-filter__item ${show && 'show'}`}>
      <div onClick={setShow} className="product-list-filter__item_title">{title}</div>
      <div className="product-list-filter__item_content">
        {show && children}
      </div>
    </div>
  )
}

export default DropDown(ProductListFilterItem)();