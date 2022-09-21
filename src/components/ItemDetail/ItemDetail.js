import { Link  } from 'react-router-dom';
import './ItemDetail.styles.css';
import Counter from '../Counter/Counter';

const ItemDetail = ({ title, detail, price, image, quantity, btnAgregarCarrito }) => {

  return (
    <article className='contendorProductosDetalle text-focus-in '>
      <div className='infoProductos'>
        <h2>{title}</h2>
        <img className="img" src={image} alt={title} width={'300px'} />
        <p>{detail}</p>
        <h3> $ {price}</h3>
        <p>Disponibles: {quantity}</p>
        <Counter stockProductos={quantity}/>
        <button className='btnAgregarCarrito'>{btnAgregarCarrito}</button>
        <Link to={'/cart'}>Ir al carrito</Link>
        

      </div>
    </article>
  );
};
export default ItemDetail;


