import Link from 'next/link';
import Cart from "../cart";
import {setCartIsShow} from "../../store/actions";
import {connect} from "react-redux";
import SearchForm from "../search-form";

const Header = ({setCartIsShow, cartItemsCount}) => (
  <header className='header'>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className=" col-12 col-sm order-3 order-sm-1">
          <nav className="header__menu">
            <Link href='/products/woman'><a className="header__menu_item">Woman</a></Link>
            <Link href='/products/man'><a className="header__menu_item">Man</a></Link>
            <Link href='/products'><a className="header__menu_item">New</a></Link>
          </nav>
        </div>
        <div className=" col-12 order-1 col-sm order-sm-2">
          <Link href='/'><a className='header__logo'>Nîmes</a></Link>
        </div>
        <div className="col-12 order-2 col-sm order-sm-3">
          <div className="header__buttons">
            <SearchForm/>
            <button onClick={setCartIsShow} className="header__buttons_item cart-btn">
              <span className='cart-count'>{cartItemsCount}</span>
              <img src='/img/icons/cart.svg' />
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6 ml-auto">
        <Cart/>
      </div>
    </div>
  </header>
)

const mapStateToProps = state => ({cartItemsCount : state.cart.count})

const mapDispatchToProps = {
  setCartIsShow
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);