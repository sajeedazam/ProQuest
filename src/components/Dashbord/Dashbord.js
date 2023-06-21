import React from 'react';
import Categories from '../Categories/categories';
import About from '../About/about';
import City from '../City/city';

function Dashboard() {
  return (
    <div>
      <Categories />
      <About />
      <City />
    </div>
  );
}

export default Dashboard;
