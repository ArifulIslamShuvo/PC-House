import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, srtProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => srtProducts(data))
    },[])
    const AddToCart = (product) => {
        console.log('click');
    }
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
                <h3>Cart</h3>

            </div>
        </div>
    );
};

export default Shop;