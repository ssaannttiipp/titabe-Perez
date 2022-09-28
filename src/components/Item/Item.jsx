import './Item.style.css';
const Item = ({ title, price, image }) => {

  return (
    <article className='contendorProductos text-focus-in '>

      <h2>{title}</h2>
      <img className="img" src={image} alt={title} width={'300px'} />
      <span className='span'>
      <p>${price}</p>
      </span>
    </article>
  );
};

export default Item;