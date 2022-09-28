import Item from "../Item/Item";
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ lista }) => {
  return (
    <div className='listaProductos' >
      {
        lista.map((product) => (
          <Link
            key={product.id}
            to={'/detail/' + product.id}
            style={{ textDecoration: "none", color: "white" }} >
            <Item
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              stock={product.stock}
            />
          </Link>
        ))}
    </div>
  );
};

export default ItemList;