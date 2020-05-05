const ItemCounter = ({itemCounter, increaseCounter, descreaseCounter}) => {

  const onDecrease = e => {
    e.preventDefault();
    descreaseCounter();
  }

  const onIncrease = e => {
    e.preventDefault();
    increaseCounter();
  }

  return (
    <div className='item__counter'>
      <button onClick={onDecrease} className='item__counter_btn'>-</button>
      <span className="item__counter_result">{itemCounter}</span>
      <button onClick={onIncrease} className='item__counter_btn'>+</button>
    </div>
  )
}

export default ItemCounter;