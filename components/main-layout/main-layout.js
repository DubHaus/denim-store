import Head from 'next/head';

import Header from '../header';
import Footer from '../footer';

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      </Head>
      <div className='app'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>

    </React.Fragment>
  )
}

export default MainLayout;