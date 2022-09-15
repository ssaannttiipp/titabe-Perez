
const Item = ({title, price, image}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <img src= {image} alt={title} width= {'200px'} />
    </div>
  );
};

export default Item;