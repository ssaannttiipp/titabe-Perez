import data from '../ItemListContainer/mockData';
import { useEffect, useState } from "react";
import ItemDetailList from '../ItemDetailList/ItemDetailList';
import { useParams } from 'react-router-dom';



const Productos = () => {
    const { id } = useParams();
    const [productList, setProductList] = useState([]);
    

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
            <ItemDetailList lista={productList} />
        </section>
    );
};



export default Productos;