import data from "./mockData";
import Titulo from "../Titulo/Titulo"
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts.then((response) => {
         setProductList (response);
        })
        .catch((error) => console.log (error));
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });


    const onAdd = (quantity) => {
        console.log('compraste ${quantity} unidades');
    };


    return (
        <div>
            <Titulo texto={greeting} />
            <ItemList lista={productList} />
            <ItemCount initial={3} stock={5} onAdd={onAdd} />

        </div>

    );
};

export default ItemListContainer;