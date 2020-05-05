const FilterRadioList = ({ list, changeActive, active }) => {
  return (
    <div className="filter-radio-list">
      {list.map((props, idx) => <FilterSortPriceItem key={idx} {...props} active={active} setActive={changeActive} />)}
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