
import './ItemDetailList.style.css';
import Item from '../ItemDetail/ItemDetail';


const ItemDetailList = ({ lista }) => {
  return (
    <div className='listaProducts' >
      {
        lista.map((product) => (
          < Item
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            detail={product.detail}
            quantity={product.quantity}

          />
        ))
      }
    </div>
  )
}

export default ItemDetailList;