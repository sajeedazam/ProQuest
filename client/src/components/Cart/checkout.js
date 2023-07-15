import React from 'react';
import { useDispatch } from 'react-redux';
import { checkoutAsync } from '../../redux/notifications/thunks';

function Checkout() {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(checkoutAsync());
  }

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
