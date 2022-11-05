import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Products from '../Products/Products';
import { addLocalStorage, getStoredCart } from '../Utility/Utility';
import './Shop.css';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        const getCart = getStoredCart();
        const savedCart = [];
        for (const id in getCart) {
            const getAddedProduct = products.find(product => product.id === id);
            if (getAddedProduct) {
                const quantity = getCart[id];
                getAddedProduct.quantity = quantity;
                savedCart.push(getAddedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    const buttonHandler = (selectedProduct) => {
        console.log(selectedProduct);
        // let newCart = [];
        // const exists = cart.find(product => product.id === selectedProduct.id);
        // if (!exists) {
        //     selectedProduct.quantity = 1;
        //     newCart = [...cart, selectedProduct];
        // }
        // else {
        //     const rest = cart.filter(product => product.id === selectedProduct.id);
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists];
        // }
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id === selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addLocalStorage(selectedProduct.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;