import React from 'react';
import './product.css'
const Product = (props) => {
    const {addToCart, phone} = props;
    const { name, img, price, } = props.phone;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-info">
                <p className="product-name">{name}</p>
                <p><small>price: $ {price}k</small></p>
            </div>
            <button onClick={() => addToCart(phone.name)} className="btn-cart" >Add  to Cart</button>
            
        </div>
    );
};

export default Product;