import { Link } from 'react-router-dom';
import './ItemDetail.styles.css';
import Counter from '../Counter/Counter';

const ItemDetail = ({ title, detail, price, image, quantity, btnAgregarCarrito }) => {

  return (
    <article className='contendorProductosDetalle text-focus-in, text-center'>

      <h2>{title}</h2>
      <img className="img" src={image} alt={title} width={'300px'} />
      <p>{detail}</p>
      <h3> $ {price}</h3>
      <p>Stock: {quantity}</p>
      <Counter stockProductos={quantity} />

      <Link to={'/cart'}><button className='btnAgregarCarrito'>{btnAgregarCarrito}</button></Link>

    </article>
  );
};
export default ItemDetail;


