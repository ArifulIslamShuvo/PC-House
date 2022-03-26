import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const{id,img,name,price} = props.product;
// console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
              <h3>{name}</h3>
              <p>Price: {price}</p>
            </div>
            <button onClick={()=>props.AddToCart(props.product)} className='cart-btn'>
                <p>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;