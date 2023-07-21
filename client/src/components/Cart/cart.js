import React from 'react';
import '../Cart/cart.css';
import cart from './cart-icon.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart-icon'>
      {/* <img src={cart}  /> */}
      <Link to="/cart">
        <img src={cart} />
      </Link>
    </div>
  );
};

export default Cart;