import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>This is a cart</h1>
            <p>Selected Items: {props.cart}</p>
        </div>
    );
};

export default Cart;