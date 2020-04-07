import { useState } from 'react';

const DropDown = Wrapped => {
  return () => {
    return ({ ...props }) => {
      const [show, setShow] = useState(false);

      const onSetShow = e => {
        e.stopPropagation();
        setShow(!show);
      }

      return <Wrapped {...props} show={show} setShow={onSetShow} />
    }
  }
}

export default DropDown;