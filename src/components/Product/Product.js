import React from 'react';
import './Product.css'

const Product = (props) => {
    const{id,img,name,price} = props.product;
// console.log();
    return (
        <div className='prduct'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;