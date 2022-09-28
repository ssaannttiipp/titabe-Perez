import data from '../ItemListContainer/mockData';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
/* import { getFirestore, doc, getDoc } from "firebase/firestore"; */
import './ItemDetailContainer.css'

const Productos = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState([]);
    

    useEffect (() => {
      /*   getItem(); */
        
      getItem.then((response) => {
            const dataFiltrada = response.filter((product) => product.id === id);
            setProductDetail(...dataFiltrada);
        })
    },)

    /* const getItem = () => {
        const db = getFirestore();
        const queryDoc = doc(db, "Items", id);
        getDoc(queryDoc).then((res) =>{
            setProductDetail({id: res.id, ...res.data()});
        }).catch((err) => console.log(err));
    } */
    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    return (
        <section className="contenedorDetalle">
             <ItemDetail lista = {productDetail} />
        </section>
    );
};



export default Productos;