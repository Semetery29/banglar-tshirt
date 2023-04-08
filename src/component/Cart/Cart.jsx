import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2>Order Summerry: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDARING
 * 1. 
 */