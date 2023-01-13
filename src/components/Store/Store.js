import React from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './store.css'

const Store = () => {
    const phones = [
        {id: 1, img: "../../images/iphone-1.jpg",  name: 'iphone 1', price:100000 },
        {id: 2, img: "../../images/iphone-2.jpg",  name: 'iphone 2', price:100000 },
        {id: 3, img: "../../images/iphone-3.jpg",  name: 'iphone 3', price:100000 },
        {id: 4, img: "../../images/iphone-4.jpg",  name: 'iphone 4', price:100000 },
        {id: 5, img: "../../images/iphone-5.jpg",  name: 'iphone 5', price:100000 },
        {id: 6, img: "../../images/iphone-6.jpg",  name: 'iphone 6', price:100000 }
    ]


    return (


        <div className='store-container'>
            <div className="products-container">
              {
                phones.map(phone => <Product
                key={phone.id}
                phone ={phone}

                ></Product>)
              }
              
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Store;