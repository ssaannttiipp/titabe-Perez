import data from "./mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
/* import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"; */
import "./ItemListContainer.css";

const Productos = (props) => {
    const { categoryName } = useParams();
    console.log(categoryName);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        /* getProducts(); */
        if(categoryName){
            const response = data.filter((response) => response.category === categoryName)
            setProductList(response);
        }else{
            getProducts.then((response) => {
                setProductList(response);
            })
        }  
        //  eslint-disable-next-line    
    }, [categoryName])

    /* const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "Items");
        if (categoryName) {
            const queryFiltered = query(querySnapshot, where("category", "==", categoryName))
            getDocs(queryFiltered).then((response) => {
                console.log(response.docs);
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProductList(data);
            })
        } else {
            getDocs(querySnapshot).then((response) => {
                console.log(response.docs);
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProductList(data);
            })
        }

        

    } */
    const getProducts = new Promise((resolve, reject) => { 
            setTimeout(() => {
                resolve(data);
            }, 2000);
            
        });


    return (
        <section className='productos'>
            <h2 className='productos-title tracking-in-contract '>{props.titulo}</h2>
            <section>
                <ItemList lista={productList} />
            </section>
        </section>

    );
};

export default Productos;