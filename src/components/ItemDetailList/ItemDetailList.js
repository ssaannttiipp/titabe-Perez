
import './ItemDetailList.style.css';
import Item from '../ItemDetail/ItemDetail';


const ItemDetailList = ({ lista }) => {
  return (
    <div className='listaProductos2' >
      {
        lista.map((product) => (
          < Item
            key={product.id}
            title={product.title}
            detail={product.detail}
            price={product.price}
            image={product.image} />
        ))
      }
    </div>
  )
}

export default ItemDetailList;