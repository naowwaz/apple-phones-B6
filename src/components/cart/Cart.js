import React from 'react';
import './cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3>Selected Item:  {cart.length}</h3>
            <p>Total Price: $</p>
            <p>Tax:</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;