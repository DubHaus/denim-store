import Head from 'next/head';

import Header from '../header';
import Footer from '../footer';

import styles from './layout.module.sass';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css" />
      </Head>
      <div className={`app ${styles.app}`}>
        <Header />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </div>

    </React.Fragment>
  )
}

export default Layout;