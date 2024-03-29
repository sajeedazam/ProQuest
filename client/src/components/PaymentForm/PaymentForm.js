import React from 'react';
import { useDispatch } from 'react-redux';
import { checkoutAsync, getJobsAsync } from '../../redux/notifications/thunks';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Modal from 'react-modal';
import './PaymentForm.css';

function PaymentForm({ isOpen, onRequestClose }) {
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError("Credit card details are not entered");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      const paymentMethodId = paymentMethod.id;
      await dispatch(checkoutAsync(paymentMethodId));
      await dispatch(getJobsAsync());
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
    >
      <h2>Enter Credit Card Information</h2>
      <form onSubmit={handleSubmit}>
        <CardElement className="StripeElement" />
        {error && <div className="error">{error}</div>}
        <button type="submit">Pay</button>
      </form>
      <button onClick={onRequestClose} className="close-button">Close</button>
    </Modal>
  );
}

export default PaymentForm;
