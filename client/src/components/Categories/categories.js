import React, { useState, useEffect } from 'react';
import '../Categories/categories.css';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addJobsAsync } from '../../redux/notifications/thunks';
// import { addToCart } from '../../redux/cartActions';

const categories = [
  { name: 'Saloon', image: 'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20861.jpg' },
  { name: 'Spa', image: 'https://gray-wrdw-prod.cdn.arcpublishing.com/resizer/0arsBBPRvUHXg0L84yFAQ-ZI8zs=/1200x900/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/5Z5Z3R5MKJKR7D5MEMZ6ZPMTNM.jpg' },
  { name: 'Electricians', image: 'https://lirp.cdn-website.com/410c660f/dms3rep/multi/opt/commercial+electrician-1920w.jpeg' },
  { name: 'Plumbing', image: 'https://blog.herzing.ca/hubfs/iStock-1204813771.jpg' },
];

function Categories() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  // const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();

  const handleOnClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newJob = {
      category: selectedCategory,
      name: name,
      time: time,
      customerName: customerName,
      phone: phone
    };

    try {
      const resultAction = await dispatch(addJobsAsync(newJob));
      console.log('New job added', resultAction);
      ////dispatch(addToCart(newJob));


      // setShowNotification(true);
    } catch (error) {
      console.error('Failed to add job', error);
    } finally {
      setName('');
      setTime('');
      setCustomerName('');
      setPhone('');

      setIsOpen(false);
    }
  }

  // useEffect(() => {
  //   let timeoutId;
  //   if(showNotification) {
  //     timeoutId = setTimeout(() => setShowNotification(false), 20000);
  //   }

  //   return () => clearTimeout(timeoutId);
  // }, [showNotification]);



  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="categoriesContainer">
      {/* {showNotification && (
        <div className="notification">
          Successfully Added to Cart
        </div>
      )} */}

      <h1>Categories</h1>
      {categories.map(category => (
        <div className="card" key={category.name} onClick={() => handleOnClick(category.name)}>
          <img src={category.image} alt={category.name} className="categoryImage" />
          <h3>{category.name}</h3>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Book an appointment for {selectedCategory}</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Category:
            <input type="text" name="category" value={selectedCategory} readOnly />
          </label>
          <label>
            Service:
            <input type="text" name="name" value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </label>
          <label>
            Time:
            <input type="text" name="time" value={time}
              onChange={(e) => setTime(e.target.value)}
              required />
          </label>
          <label>
            Customer Name:
            <input type="text" name="customerName" value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required />
          </label>
          <button type="submit">Add to Cart</button>
        </form>
        <button className="close-button" onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
}

export default Categories;
