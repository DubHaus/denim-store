import { useState } from 'react';

const FilterColorPicer = props => {
  const [currentColor, setCurrentColor] = useState('white');

  return (
    <div className="filter-color-picer">
      <FilterColorPicerItem color={'white'} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <FilterColorPicerItem color={'grey'} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <FilterColorPicerItem color={'blue'} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <FilterColorPicerItem color={'green'} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <FilterColorPicerItem color={'light-blue'} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <FilterColorPicerItem color={'black'} currentColor={currentColor} setCurrentColor={setCurrentColor} />
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