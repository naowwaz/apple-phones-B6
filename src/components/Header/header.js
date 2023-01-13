import React from 'react';
import './header.css'
const Header = () => {
    return (
        <nav className='header'>
                {/* <img src="../images/logo.png" alt="" /> */}
                <h1>i Phone</h1>
                <div>
                <a href="Home">Home</a>
                <a href="store">Store</a>
                <a href="order">Order</a>
                </div>
            
        </nav>
    );
};

export default Header;