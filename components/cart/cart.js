import {connect} from "react-redux";
import {setCart, addCartListItem} from "../../store/actions/cart";
import {getCart, deleteCartItem} from "../../api";

const Cart = ({cart, setCart, addCartListItem}) => {
  const {isShow, list, cost} = cart;

  React.useEffect(() => {
    getCart()
      .then(items => {
        setCart(items);
      })
  },[])

  const deleteHandler = async (id) => {
   const items = await deleteCartItem(id);
    setCart(items);
  }

  if (!isShow) return null;
  if (!list.length) return (
    <div className="cart">
      <div className="cart__wrap">
        <p>No one items in cart</p>
      </div>
    </div>
  );

  return (
    <div className="cart">
      <div className="cart__wrap">
        {list.map(el => <CartItem key={el.id} item={el} onDelete={deleteHandler}/>)}
        <button className='black_btn'>Buy {cost}$</button>
      </div>
    </div>
  )
}

const CartItem = ({item, onDelete}) => {
  const {img, name, color, size, count, cost, id} = item;
  return (
    <div className="cart__item">
      <img src={img} alt="" className="cart__item_img"/>
      <h4 className="cart__item_title">{name}</h4>
      <span className={`cart__item_color ${color}`}></span>
      <span className="cart__item_size">{size}</span>
      <span className="cart__item_count">{count}</span>
      <span className="cart__item_price">${cost} $</span>
      <button onClick={() => onDelete(id)} className="delete-icon">
        <img src='/img/icons/trash.svg'/>
      </button>
    </div>
  )
}


const mapStateToProps = state => ({cart: state.cart});
const mapDispatchToProps = {
  setCart,
  addCartListItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);