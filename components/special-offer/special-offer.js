

const SpecialOffer = props => {
  return (
    <div className="special-offer">
      <div className="container">
        <div className="row">
          <div className="col-12 order-2 order-md-0 col-md-6 col-lg-7">
            <div className="special-offer__img">
              <img src='/img/spring_img.png' />
            </div>
          </div>
          <div className="col-12 order-1 order-md-0 col-md-6 col-lg-5">
            <div className="special-offer__descr">
              <div className="special-offer__descr_wrap">
                <div className="special-offer__descr_wrap_block">
                  <h4>Street fashion collection</h4>
                  <h2>Fall 2019</h2>
                  <button className='black_btn'>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer;