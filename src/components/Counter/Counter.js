
import './Counter.css'

const Counter = ({ setItem, items, stock, price }) => {
  const sumar = () => {
    if(items < stock) {
        setItem(items + 1)
    }
}
const restar = () => {
    if(items > 0){
        setItem(items - 1)
    }
    return;
}

return (
    <>
        <div className="acomodadoContador">            
            <div>
            <button className="contador" onClick={restar}>-</button>
                <span className="spanDetalle">{items}</span>
                <button className="contador" onClick={sumar}>+</button>               
            </div>
            <div className="precio">
                <span className="spanTotal">
                    <b>Total: ${items * price}</b>                
                </span>        
            </div>
        </div>
    </>
)


}

export default Counter;


