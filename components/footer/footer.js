import Link from 'next/link';

import styles from './footer.module.sass';

const Footer = props => (
  <footer className={`footer ${styles.footer}`}>
    <div className="container">
      <div className="footer__logo">
        <img />
      </div>
      <div className="footer__menu">
        <Link href='/'><a className='footer__menu_item'>Shop</a></Link>
        <Link href='/delivery'><a className='footer__menu_item'>Delivery</a></Link>
        <Link href='/service'><a className='footer__menu_item'>Service</a></Link>
        <Link href='/sitemap'><a className='footer__menu_item'>Sitemap</a></Link>
        <Link href='/contacts'><a className='footer__menu_item'>Contacts</a></Link>
      </div>
      <div className="footer__socials">
        <a className='footer__soclials_item'>
          <img />
        </a>
        <a className='footer__soclials_item'>
          <img />
        </a>
        <a className='footer__soclials_item'>
          <img />
        </a>
        <a className='footer__soclials_item'>
          <img />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer;