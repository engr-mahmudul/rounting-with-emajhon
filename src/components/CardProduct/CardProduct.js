import React from 'react';

const CardProduct = (props) => {
    const { name, seller, price, stock,key} = props.product;
    return (
        <div className="product">
        <div>
           
        </div>
        <div>
            <h4 className="product-name">{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            
          
            <button onClick={()=> props.removeItem(key)} className="btn-regular">Remove From Cart</button>
        </div>
    </div>
    );
};

export default CardProduct;