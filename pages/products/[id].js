import MainLayout from "../../components/main-layout"
import FilterColorPicer from "../../components/filter-color-picer"
import Slider from '../../components/slider';


export default () => {

  const imgs = [
    '/img/product-item-1.png',
    '/img/product-item-2.png',
    '/img/product-item-2.png',
    '/img/product-item-2.png',
  ]

  return (
    <MainLayout>
      <div className="product-item">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Slider>
                {imgs.map(src => <img src={src} />)}
              </Slider>
            </div>

            <div className="col-6">
              <div className="product-item-descr">
                <h2 className="product-item-descr__title">Overalls</h2>
                <p className="product-item-descr__text">Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.</p>
                <div className="product-item-descr__color_picer">
                  <h4 className='product-item-descr__subtitle'>Color</h4>
                  <FilterColorPicer colors={[
                    'green',
                    'blue',
                    'grey',

                  ]} />
                </div>
                <div className="product-item-descr__size_picer">
                  <h4 className='product-item-descr__subtitle'>Size</h4>
                </div>
                <div className="product-item-descr__price">$ 160</div>
                <button className="black_btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      .
    </MainLayout>
  )
}