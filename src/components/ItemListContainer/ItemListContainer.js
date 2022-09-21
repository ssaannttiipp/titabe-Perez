import data from "./mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const Productos = (props) => {
    const { category } = useParams();
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        if (category) {
            const response = data.filter((response) => response.category === category)
            setProductList(response);
        } else {
            getProducts.then((response) => {
                setProductList(response);
            });
        }
    }, [category]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    });



    return (
        <section className='productos'>
        <h2 className='productos-title tracking-in-contract '>{props.titulo}</h2>
        <section>
            <ItemList lista={productList}/>
        </section>
    </section> 

    );
};

export default Productos;