import MainLayout from '../main-layout';
import BreadCrumbs from '../breadcrumbs';

const LayoutWithBreadCrumbs = ({children}) => {
  return (
    <MainLayout>
      <div className="header-sale-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 offset-2">
              <div className="header-sale-section__descr">
                <BreadCrumbs />
                <h2 className='header-sale-section__title'>Denim Collection Fall 2019</h2>
              </div>
            </div>
            <div className="col-4">
              <div className="header-sale-section__img">
                <img src='/img/sale_1.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </MainLayout>
  )
}

export default LayoutWithBreadCrumbs;