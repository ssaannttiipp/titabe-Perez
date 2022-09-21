import React, {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Counter.css'

const Counter = (props) => {
    const MySwal = withReactContent(Swal)
    const [stock, setStock] = useState(0);
    const sumar = () => stock <  props.stockProductos ? setStock(stock + 1) : MySwal.fire({
      icon: 'warning',
      title: 'Se alcanzó el stock disponible',
      text: 'Presioná OK para continuar comprando',
    });
    const restar = () => stock > 0 ? setStock(stock - 1) : Swal.fire({
      icon: 'error',
      title: 'No se pueden ingresar valores negativos',
      text: "Presioná OK para continuar comprando"});
  return (
    <>
    <div className="contenedorCounter">
        <div className="counter">
            <div className="stockDisponible">{stock}</div>
            <button className="botonCounterRestar" onClick={restar}>-</button>
            <button className="botonCounterSumar" onClick={sumar}>+</button>
        </div>
    </div>
    </>
  );
}

export default Counter;