
const ItemPicer = ({items = [], currentElement, setCurrentElement, Component }) => {
  return (
    <div className="item-picer" >
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={(e) => {
            e.preventDefault();
            setCurrentElement(item);
          }}
          className={`item-picer__item ${item === currentElement && 'active'}`}>
          <Component key={idx} prop={item}  />
        </div>
      ))}
    </div>
  )
}

export default ItemPicer;