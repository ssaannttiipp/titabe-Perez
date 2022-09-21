import './ItemDetailContainer.style.css'
import data from '../ItemListContainer/mockData';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetailList from '../ItemDetailList/ItemDetailList';
import Titulo from '../Titulo/Titulo';


const Productos = (greeting) => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.filter((prod) => prod.id === id));
        }, 2000)

    });

    return (
        <section>
            <Titulo texto={greeting} />
            <ItemDetailList lista={productList} />
        </section>
    );
};



export default Productos;