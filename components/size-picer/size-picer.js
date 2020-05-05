import ItemPicer from "../item-picer";

const SizePicer = ({sizes, size, changeSize}) => {
  return(
    <ItemPicer
      items={sizes}
      currentElement={size}
      setCurrentElement={changeSize}
      Component={SizePicerItem}
    />
  )
}

const SizePicerItem = ({prop}) => (
  <span className="size-picer__item">{prop}</span>
)

export default SizePicer;
