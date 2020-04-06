import { useState } from 'react';

const FilterRadioList = ({ list }) => {
  const [active, setActive] = useState(list[0].value);

  return (
    <div className="filter-radio-list">
      {list.map((props) => <FilterSortPriceItem {...props} active={active} setActive={setActive} />)}
    </div>
  )
}

const FilterSortPriceItem = ({ value, title, active, setActive }) => {
  const onSetActive = e => {
    e.stopPropagation();
    setActive(value)
  }

  return (
    <label htmlFor={value}>
      <input onChange={onSetActive} checked={active === value} id={value} type='radio' value={value} />
      <span className='filter-radio-list__item'>{title}</span>
    </label>
  )
}

export default FilterRadioList;