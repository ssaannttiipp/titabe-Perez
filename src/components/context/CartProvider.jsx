import { useState } from "react"
import { CartContext } from "./CartContext";


//validar el pructoto a añadir al carrito//
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const itemInCart = isInCart(item.id)
        if (itemInCart) {
            itemInCart.quantity = itemInCart.quantity += quantity;
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    //producto en el carrito//
    const isInCart = (id) => {
        return cart.find((cartItem) => cartItem.id === id);

    };


    //eliminar todo del carrito//
    const clear = () => {
        setCart([]);
    };


    //borrar un producto del carrito //
    const removeItem = (productId) => {
        let nuevoArreglo = [];
        cart.forEach((product) => {
            if (product.id === productId) {
                console.log(product);
            } else {
                nuevoArreglo.push(product);
            }
        });
        setCart(nuevoArreglo);
    };

    //calculo del precio total del Carito//
    const totalPrecioCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
    };
    //calculo el total de items en el Carrito//
    const totalItemsCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    }



    return (
        <CartContext.Provider value={{cart , addToCart , removeItem, clear, totalPrecioCart, totalItemsCart}}>
        {children}
        </CartContext.Provider>
    );
};