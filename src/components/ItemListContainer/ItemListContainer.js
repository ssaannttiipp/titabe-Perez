import Titulo from "../Titulo/Titulo"
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer = ({greeting}) => {

  const onAdd = (quantity) =>{
    console.log('compraste ${quantity} unidades');
  }

  return (
   <div>
    <Titulo texto= {greeting} />
   <ItemCount initial={3} stock={5} onAdd={onAdd} />
   </div>
   
  )
}

export default ItemListContainer