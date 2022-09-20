
import './ItemDetailContainer.style.css'
import data from '../ItemListContainer/mockData';
import { useEffect, useState } from "react";
import ItemDetailList from '../ItemDetailList/ItemDetailList';
import ItemCount from '../ItemCount/ItemCount';


const Productos = (greeting) => {

    const [productList, setProductList] = useState([]);
    

    useEffect(() => {
      getProducts.then ((response)=>{
        setProductList(response);
      });
         
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ( data.filter((prod)=> prod.id === '1') );
        }, 2000)
    });
    
    const onAdd = (quantity) => {
        console.log('compraste ${quantity} unidades');
      };

    return (
        <div>
            <ItemDetailList lista={productList} />
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
        </div>

    )
}

export default Productos;