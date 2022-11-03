import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const buttonHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shopContainer'>
            <div className='cardContainer'>
                {
                    products.map(product => <Products key={product.id} product={product} clickHandler={buttonHandler}></Products>)
                }
            </div>
            <div className='cartContainer'>
                {/* <p>This is a add to cart section</p>
                <p>Items of product: {cart.length}</p> */}
                <Cart cart={cart.length}></Cart>
            </div>
        </div>
    );
};

export default Shop;