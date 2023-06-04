import React from 'react';
import './Categories.css';

// Define an array of objects, where each object represents a category and has a name and image
const categories = [
  { name: 'Hair Cut', image: 'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20861.jpg?t=st=1685486522~exp=1685487122~hmac=93fec94be21029e8785c029e53300eec3e2690d208b825dea5d338ee7a278212' },
  { name: 'Manicure', image: 'https://gray-wrdw-prod.cdn.arcpublishing.com/resizer/0arsBBPRvUHXg0L84yFAQ-ZI8zs=/1200x900/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/5Z5Z3R5MKJKR7D5MEMZ6ZPMTNM.jpg' },
  { name: 'Electricians', image: 'https://lirp.cdn-website.com/410c660f/dms3rep/multi/opt/commercial+electrician-1920w.jpeg' },
  { name: 'Plumbing', image: 'https://blog.herzing.ca/hubfs/iStock-1204813771.jpg' },
];

function Categories() {
  return (
    <div className="categories">
      {categories.map(category => (
        <div className="category-card" key={category.name}>
          <img src={category.image} alt={category.name} className="category-image" />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;