import { useState, useEffect } from 'react';

const DropDown = ({ children }) => {
  const [show, setShow] = useState(false);

  const onShow = e => {
    e.stopPropagation();
    setShow(!show);
  }


  return (
    <div className={`drop-down ${show && 'show'}`} onClick={onShow}>
      {children}
    </div>
  )
}

export default DropDown;