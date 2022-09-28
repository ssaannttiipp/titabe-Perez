import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    const {totalItemsCart} = useContext(CartContext);

    return (
    <div className='centrado'>
        <FaShoppingCart className='carrito' />
        <span className='spanCarrito'>{totalItemsCart()}</span>        
    </div>
    )
}
