import { useState } from 'react';

import changeSlider from './change-slider';

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const onChangeSlider = action => setCurrentSlide(changeSlider(action, currentSlide,children.length))


  const smallImgsStyle = {
    width: `${((100 - 10) / children.length).toFixed(1)}%`
  }

  return (
    <div className="slider">
      <div className="slider__main_slide">
        <div className="slider__main_slide_item">
          {children[currentSlide]}
        </div>
        <div className="slider__btns">
          <button
            onClick={() => onChangeSlider('prev')}
            className="slider__btn prev">
            <img src='/img/icons/drop-down.svg' />
          </button>
          <button
            onClick={() => onChangeSlider('next')}
            className="slider__btn next">
            <img src='/img/icons/drop-down.svg' />
          </button>
        </div>
      </div>
      <div className="slider__other_slides">
        {children.map((el, idx) =>
          <button
            key={idx}
            onClick={() => onChangeSlider(idx)}
            style={smallImgsStyle}
            className="slider__other_slides_item">
            {el}
          </button>
        )}
      </div>
    </div>
  )
}

export default Slider;