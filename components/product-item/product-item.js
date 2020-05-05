import ColorPicer from "../filter-color-picer"
import Slider from '../slider';
import {connect} from "react-redux";
import {addCartListItem} from "../../store/actions";
import {addItemToCart} from "../../api";
import {
  changeProductItemColor,
  changeProductItemSize,
  descreaseProductItemCounter,
  increaseProductItemCounter, resetProductItemProps
} from "../../store/actions/product-item";
import SizePicer from "../size-picer";
import ItemCounter from "../item-counter";

const ProductItem = ({
                       productItem, addCartListItem,
                       changeColor, changeSize,
                       increaseCounter, descreaseCounter,
                       resetProductItemProps
                     }) => {
  const {name, text, images, colors, sizes, id} = productItem.item;
  const {color, size, count, cost} = productItem;

  const submitHandler = async e => {
    e.preventDefault();

    const newcartList = await addItemToCart({id, color, size, count});
    addCartListItem(newcartList);
    resetProductItemProps();
  }

  return (
    <div className="product-item">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <Slider>
              {images.map((src, idx) => <img className='product-item__img' key={idx} src={src}/>)}
            </Slider>
          </div>

          <div className="col-12 col-md-6">
            <div className="product-item-descr">
              <h2 className="product-item-descr__title">{name}</h2>
              <p className="product-item-descr__text">{text}</p>
              <form className='product-item__form' onSubmit={submitHandler}>
                <div className="product-item-descr__item color_picer">
                  <h4 className='product-item-descr__subtitle'>Color</h4>
                  <ColorPicer color={color} changeColor={changeColor} colors={colors}/>
                </div>
                <div className="product-item-descr__item size-picer">
                  <h4 className='product-item-descr__subtitle'>Size</h4>
                  <SizePicer sizes={sizes} size={size} changeSize={changeSize}/>
                </div>
                <div className="product-item-descr__item counter">
                  <h4 className='product-item-descr__subtitle'>Counter</h4>
                  <ItemCounter
                    itemCounter={count}
                    increaseCounter={increaseCounter}
                    descreaseCounter={descreaseCounter}/>
                </div>
                <div className="product-item-descr__price">$ {cost}</div>
                <button className="black_btn">Add to cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  productItem: state.productItem
})

const mapDispatchToProps = {
  addCartListItem,
  changeColor: changeProductItemColor,
  changeSize: changeProductItemSize,
  increaseCounter: increaseProductItemCounter,
  descreaseCounter: descreaseProductItemCounter,
  resetProductItemProps
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);