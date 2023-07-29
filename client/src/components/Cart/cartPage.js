import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemDeleteButton from './delete';
import { getJobsAsync } from '../../redux/notifications/thunks';
import './cartPage.css';
import Checkout from './checkout';
import { Link } from 'react-router-dom';

function CartPage() {
  const jobs = useSelector(state => state.jobs.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getJobsAsync());
  }, []);

  return (
    <div className="cartPage">
      <Link to="/dashboard" className='mt-3'>Back</Link>      
      <h1>Cart</h1>
      <ul className='addedItems'>
        {jobs && jobs.length > 0 ? jobs.map((item, index) => (
          <li key={index}>
            <strong> {item.name} </strong>
            <strong> Price: ${item.price} <ItemDeleteButton item={item._id} /></strong>
            
          </li>
        )) : <p>Cart empty</p>}
      </ul>
      <Checkout />
      
    </div>
  );
}

export default CartPage;

