const changeSlider = (action, currentSlide, slideCount) => {
  switch (action) {
    case 'next':
      return currentSlide >= slideCount - 1 ? 0 : currentSlide + 1
    case 'prev':
      return currentSlide <= 0 ? slideCount - 1 : currentSlide - 1;
  }
  if (typeof action === 'number' && slideCount > action > 0) return action
  else return currentSlide;
}

module.exports = changeSlider;