import Link from 'next/link';

import styles from './header.module.sass';

const Header = props => (
  <header className={`header ${styles.header}`}>
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="header__menu">
            <Link href='/woman'><a className="header__menu_item">Woman</a></Link>
            <Link href='/man'><a className="header__menu_item">Man</a></Link>
            <Link href='/new'><a className="header__menu_item">New</a></Link>
          </nav>
        </div>
        <div className="col">
          <Link href='/'><a className='header__logo'>Nîmes</a></Link>
        </div>
        <div className="col">
          <div className="header__buttons">
            <button className="header__buttons_item">
              <img />
            </button>
            <button className="header__buttons_item">
              <img />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header;