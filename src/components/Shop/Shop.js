import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, srtProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const AddToCart = (product) => {
        const addNewCart = [...cart, product]
        setCart(addNewCart);
    };

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => srtProducts(data))
    },[]);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product}
                    key={product.id}
                    AddToCart={AddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Laptop</h2>
                {
                    cart.map(cart =><Cart key={cart.id} 
                        cartData={cart}></Cart>)
                }
                <button className='chhose-1'>CHOSE 1 FOR ME</button>
                <br/>
                <button className='chhose-again'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shop;