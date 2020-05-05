import ItemPicer from '../item-picer';

const ColorPicer = ({colors, color, changeColor}) => {

  return (
    <div className="filter-color-picer">
      <ItemPicer
        items={colors}
        currentElement={color}
        setCurrentElement={changeColor}
        Component={ColorPicerItem}/>
    </div>
  )
}

const ColorPicerItem = ({ prop }) => (
  <label className={`filter-color-picer__item ${prop}`}
    htmlFor={prop}>
    <input
      id={prop}
      type='radio'
      value={prop}
    />
  </label>
)

export default ColorPicer;