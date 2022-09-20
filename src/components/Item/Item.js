import './Item.style.css';
const Item = ({title, price, image}) => {

  return (
    <article className='contendorProductos text-focus-in '>
    <div>
      <h2>{title}</h2>
      <h3>${price}</h3>
      <img src= {image} alt={title} width= {'200px'} />
    </div>
    </article>
  );
};

export default Item;