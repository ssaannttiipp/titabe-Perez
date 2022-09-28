import './ItemDetail.styles.css';
import Counter from '../Counter/Counter';
import { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ lista }) => {
  const [items, setItem] = useState(1);
  const [stock, setStock] = useState();


  useEffect(() => {
    agregandoStock();
  })

  const clickeado = () => {
    console.log(items);
  }
  const { addToCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  function agregandoStock() {
    setStock(lista.stock)
  }

  function onAdd(lista) {
    addToCart(lista, items)
  }
  return (
    <div className='contendorProductosDetalle text-focus-in'>

      <h2 >{lista.title}</h2>
      <img className="imagenDetail" src={lista.image} alt={lista.title} width={'400px'} />
      <div className='detail'>
        <p>{lista.detail}</p>
        <h3> ${lista.price}</h3>
        <p>Stock: {stock}</p>
        <Counter stock={lista.stock} setItem={setItem} items={items} price={lista.price} />
        <div className="acomodadoBotones">
          {cart.length > 0 ?
            <Link to={"/cart"}>
              <button className="boton" onClick={clickeado}>Ir al carrito</button>
            </Link>
            : ""}
          <button className="boton" onClick={() => onAdd(lista)}>Agregar al carrito</button>
          <Link className="volver" to={"/productos"}>Volver</Link>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;


