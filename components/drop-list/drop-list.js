import { useState } from 'react';

const DropList = ({ title, children }) => {
  const [show, setShow] = useState(false);

  const onChangeShow = () => setShow(!show)

  const showBtnText = show ? 'Hide' : 'View all';

  const showBtn = children.length > 4
    ? <button onClick={onChangeShow} className="drop-list__show-all">{showBtnText}</button>
    : null;

  const showItems = children.length > 4 && !show
    ? children.slice(0, 4)
    : children;

  return (
    <div className="drop-list">
      <div className="container">
        <div className="drop-list__descr">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-auto"><h3 className='drop-list__title'>{title}</h3></div>
            <div className="col-md-auto">{showBtn}</div>
          </div>
        </div>
        <div className="row">
          {
            showItems.map((item, idx) => <div key={idx} className='col-6 col-sm-4 col-md-3'>{item}</div>)
          }
        </div>
      </div>
    </div>
  )
}



export default DropList;