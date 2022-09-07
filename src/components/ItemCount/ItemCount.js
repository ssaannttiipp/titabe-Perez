import "./ItemCount.css";
import { useState, useEffect } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    return (
        <div>
            <div className='counter'>
                <button disabled={count <= 1} onClick={decrease} >-</button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={increase} >+</button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar Carritto</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;