import React from 'react'
import Button from '../button/Button';
function Cards(props) {
  const {title, price, detail, imgurl} = props;
  return (
    <div>
        <img width="200px" src={imgurl} alt="Imagen" />
        <center>
          <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>{detail}</p>
        </div>
        <Button>Ver detalles</Button>
        </center>
        
    </div>
    
  )
}

export default Cards