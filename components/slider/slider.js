import { useState } from 'react';

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const otherImgsBtnStyle = {
    width: `${((100 - 10) / children.length).toFixed(1)}%`
  }

  const onSetSlide = (slide) => {
    setCurrentSlide(slide)
  }

  const onNextSlide = () => {
    setCurrentSlide(currentSlide >= children.length - 1 ? 0 : currentSlide + 1)
  }

  const onPrevSlide = () => {
    setCurrentSlide(currentSlide <= 0 ? children.length - 1 : currentSlide - 1)
  }

  return (
    <div className="slider">
      <div className="slider__main_slide">
        <div className="slider__main_slide_item">
          {children[currentSlide]}
        </div>
        <div className="slider__btns">
          <button
            onClick={onPrevSlide}
            className="slider__btn prev">
            <img src='/img/icons/drop-down.svg' />
          </button>
          <button
            onClick={onNextSlide}
            className="slider__btn next">
            <img src='/img/icons/drop-down.svg' />
          </button>
        </div>
      </div>
      <div className="slider__other_slides">
        {children.map((el, idx) =>
          <button
            onClick={() => onSetSlide(idx)}
            style={otherImgsBtnStyle}
            className="slider__other_slides_item">
            {el}
          </button>
        )}
      </div>
    </div>
  )
}

export default Slider;