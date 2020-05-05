import DropList from "../drop-list";
import ProductListItem from "../product-list-item";


const RecomendationList = ({items}) => {
  return (
    <div className="recommendations">
      <div className="container">
        <DropList title='You may also like'>
          {items.map(props => <ProductListItem key={props.id} {...props} />)}
        </DropList>
      </div>
    </div>
  )
}

export default RecomendationList;