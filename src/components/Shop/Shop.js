import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const AddToCart = (product) => {
        const addNewCart = [...cart, product]
        setCart(addNewCart);
    };   

    const chhoseForMe = () =>{
        // console.log(cart.length);
        const math = Math.ceil(Math.random()*cart.length);
        cart.map((data,index) => {
            if(index === math){
                alert(data.name)
            }
            return data.name;
        })
    }

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
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
                <h2>Selected Laptop: {cart.length}</h2>
                {
                    cart.map(cart =><Cart key={cart.id} 
                        cartData={cart}>
                        </Cart>)
                }
                    <button onClick={()=>chhoseForMe(cart.id)} className='chhose-1'>CHOOSE 1 FOR ME</button>
                    <br/>
                    <button className='chhose-again'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shop;