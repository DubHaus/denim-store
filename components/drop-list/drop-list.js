const DropList = ({ title, children }) => {
  const showBtn = children && children.length > 4
    ? <button className="drop-list__show-all">View all</button>
    : null;

  const showItems = children && children.length > 4
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
            showItems
          }
        </div>
      </div>
    </div>
  )
}



export default DropList;