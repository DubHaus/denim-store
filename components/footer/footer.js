import Link from 'next/link';

const Footer = props => (
  <footer className='footer'>
    <div className="container">
      <Link href='/'><a className='footer__logo'>Nîmes</a></Link>
      <div className="footer__menu">
        <a className='footer__menu_item'>Shop</a>
        <a className='footer__menu_item'>Delivery</a>
        <a className='footer__menu_item'>Service</a>
        <a className='footer__menu_item'>Sitemap</a>
        <a className='footer__menu_item'>Contacts</a>
      </div>
      <div className="footer__socials">
        <a className='footer__soclials_item'>
          <img src='/img/icons/facebook.svg' />
        </a>
        <a className='footer__soclials_item'>
          <img src='/img/icons/instagramm.svg' />
        </a>
        <a className='footer__soclials_item'>
          <img src='/img/icons/pinterest.svg' />
        </a>
        <a className='footer__soclials_item'>
          <img src='/img/icons/twitter.svg' />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer;