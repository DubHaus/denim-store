import Link from 'next/link';

const Footer = props => (
  <footer className='footer'>
    <div className="container">
      <Link href='/'><a className='footer__logo'>Nîmes</a></Link>
      <div className="footer__menu">
        <Link href='/'><a className='footer__menu_item'>Shop</a></Link>
        <Link href='/delivery'><a className='footer__menu_item'>Delivery</a></Link>
        <Link href='/service'><a className='footer__menu_item'>Service</a></Link>
        <Link href='/sitemap'><a className='footer__menu_item'>Sitemap</a></Link>
        <Link href='/contacts'><a className='footer__menu_item'>Contacts</a></Link>
      </div>
      <div className="footer__socials">
        <Link href='/'>
          <a className='footer__soclials_item'>
            <img src='/img/icons/facebook.svg' />
          </a>
        </Link>
        <Link href='/'>
          <a className='footer__soclials_item'>
            <img src='/img/icons/instagramm.svg' />
          </a>
        </Link>
        <Link href='/'>
          <a className='footer__soclials_item'>
            <img src='/img/icons/pinterest.svg' />
          </a>
        </Link>
        <Link href='/'>
          <a className='footer__soclials_item'>
            <img src='/img/icons/twitter.svg' />
          </a>
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer;