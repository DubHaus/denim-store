const changeSlider = require('./change-slider');


describe('changeSlider', () => {

  let currentSlide = 1;
  const slideCount = 10;

  test('shoud be func', () => {
    expect(changeSlider).toBeInstanceOf(Function);
  })

  test('shoud return numb', () => {
    expect(typeof changeSlider('prev', currentSlide, slideCount) === 'number').toBeTruthy();
  })

  test('should return correct value with next, prev and set action ', () => {
    expect((changeSlider('next', currentSlide, slideCount))).toEqual(currentSlide + 1);
    expect((changeSlider('prev', currentSlide, slideCount))).toEqual(currentSlide - 1);
    expect(changeSlider(5, currentSlide, slideCount)).toEqual(5)

  })

  test('should return 0 if currentSlide is last in next action', () => {
    currentSlide = slideCount;
    expect((changeSlider('next', currentSlide, slideCount))).toEqual(0);
  })

  test('should return (sliderCount-1) if currentSlide is first in prev action', () => {
    currentSlide = 0;
    expect((changeSlider('prev', currentSlide, slideCount))).toEqual(slideCount - 1);
  })


  test('should return currentSlide if set action value is wrong', () => {
    expect(changeSlider(1222, currentSlide, slideCount)).toEqual(currentSlide)
    expect(changeSlider('dssdf', currentSlide, slideCount)).toEqual(currentSlide)
  })

})