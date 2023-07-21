import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutAsync } from '../../redux/notifications/thunks';
import './checkout.css'; 

function Checkout() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.items) || [];

  const handleCheckout = () => {
    dispatch(checkoutAsync());
    window.location.reload();
  };

  return (
    <div className="checkout-container">
      {jobs.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      )}
    </div>
  );
}

export default Checkout;
