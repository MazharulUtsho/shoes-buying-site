import React from 'react';
import './Products.css';
const Products = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    return (
        <div className='productStyle'>
            <div className='product'>
                <img src={img} alt="" />
                <div className='cardInfo'>
                    <div className='bigName'>
                        <p>Name: {name}</p>
                    </div>
                    <p>Brand Name: {seller}</p>
                    <p>Product Price: {price}</p>
                    <p>Product Ratings: {ratings}</p>
                </div>
                <button className='buttonStyle' onClick={() => props.clickHandler(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;