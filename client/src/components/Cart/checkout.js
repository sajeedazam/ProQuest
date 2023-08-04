import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './checkout.css'; 
import PaymentForm from '../PaymentForm/PaymentForm'; // Import the PaymentForm component

function Checkout() {
  const jobs = useSelector(state => state.jobs.items) || [];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCheckout = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="checkout-container">
      {jobs.length > 0 && (
        <div>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
          <PaymentForm isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Checkout;
