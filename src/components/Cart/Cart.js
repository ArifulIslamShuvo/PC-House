import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img} = props.cartData;
    return (
        <div className='selected-product'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Cart;