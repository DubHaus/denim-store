import { useState } from 'react';

const FilterColorPicer = ({ colors }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const filterColorPicerStyle = {
    width: `${colors.length * 34}px`
  }

  return (
    <div
      style={filterColorPicerStyle}
      className="filter-color-picer">
      {colors.map(color => (
        <FilterColorPicerItem
          color={color}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor} />
      ))}
    </div>
  )
}

const FilterColorPicerItem = ({ color, currentColor, setCurrentColor }) => {
  const onChangeColor = e => {
    e.stopPropagation();
    setCurrentColor(color);
  }
  return (
    <label className={`filter-color-picer__item ${color} ${color === currentColor && 'active'}`}
      for={color}>
      <input
        id={color}
        type='radio'
        checked={currentColor === color}
        value={color}
        onChange={onChangeColor}
      />
    </label>
  )
}

export default FilterColorPicer;