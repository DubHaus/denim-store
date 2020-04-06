import React from 'react';

const MainFirstScreen = props => {
  return (
    <div className="main-first-screen">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-1 align-self-end">
            <button className="main-first-screen__down_btn">
              <img src='/img/icons/down-arrow.svg' />
            </button>
          </div>
          <div className="col-3 offset-1">
            <div className="main-first-screen__descr">
              <h1 className="main-first-screen__title">
                The quality you deserve
              <span className='big-title'>DENIM</span>
              </h1>
              <button className="black_btn">Check new collection</button>
            </div>
          </div>
          <div className="col-6">
            <div className="main-first-screen__img">
              <img src='/img/main_1.png' />
            </div>
          </div>
          <div className="col-1 align-self-end">
            <div className="main-first-screen__social">
              <a className='main-first-screen__social_link' href=''>Facebook</a>
              <a className='main-first-screen__social_link' href=''>Instagramm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFirstScreen;