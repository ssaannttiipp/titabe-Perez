import './ItemDetail.styles.css';

const ItemDetail= ({title, detail, price, image}) => {
 

  return (
      <article className='contendorProductosDetalle text-focus-in '>
      <div>
        <h2>{title}</h2>
        <img src= {image} alt={title} width= {'300px'} />
        <p>{detail}</p>
        <h3> $ {price}</h3>
        
        
      
      </div>
      </article>
    );
  };
export default ItemDetail;


