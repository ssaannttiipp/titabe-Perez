import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"


const Cart = () => {
    const { cart, removeItem, clear, totalPrecioCart } = useContext(CartContext);
    console.log("cart", cart);
    return (
        <>
        <span className="fondo-cart">
             <h1 className="title-cart">Carrito</h1>
            {cart.length ===0 ? (
                <>
                    <h3>No hay productos en tu carrito</h3>
                    <Link className="linkVolver" to={"/productos"}>Volver a productos</Link>
                </>
            ) : (
                <div className="carritoContenedor">
                    {cart.map((item) => (

                        <div className="carritoflex" key={item.id}>
                            <div className="detatalleCarrito">
                                <img className="imgCarrito" src={item.image} alt={item.title} width={'400px'}/>
                                <h3 className="nombre">{item.title}</h3>
                                <h4>Precio Unitario: ${item.price}</h4>
                                <h4>Precio total: ${item.price * item.quantity}</h4>
                                <h4>Cantidad: {item.quantity}</h4>
                                <button className="botonAgregar" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="marco">
                
                {cart.length > 0 ?
                    <button className="botonVaciar" onClick={() => clear()}>Vaciar carrito</button>
                : ""}
                {totalPrecioCart() > 0 ?
                <h3>Total: ${totalPrecioCart()}</h3>
                : ""}
            </div>
            </span>
        </>
    )
}

export default Cart