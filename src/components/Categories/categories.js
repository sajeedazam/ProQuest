import React from 'react';
import '../Categories/categories.css';

const categories = [
  { name: 'Hair Cut', image: 'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20861.jpg' },
  { name: 'Manicure', image: 'https://gray-wrdw-prod.cdn.arcpublishing.com/resizer/0arsBBPRvUHXg0L84yFAQ-ZI8zs=/1200x900/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/5Z5Z3R5MKJKR7D5MEMZ6ZPMTNM.jpg' },
  { name: 'Electricians', image: 'https://lirp.cdn-website.com/410c660f/dms3rep/multi/opt/commercial+electrician-1920w.jpeg' },
  { name: 'Plumbing', image: 'https://blog.herzing.ca/hubfs/iStock-1204813771.jpg' },
];

function Categories() {
  return (
    <div className="categoriesContainer">
      <h1>Categories</h1>
      {categories.map(category => (
        <div className="card" key={category.name}>
          <img src={category.image} alt={category.name} className="categoryImage" />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;