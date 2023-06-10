import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login/login';
import App from './App';
import Categories from './components/Categories/categories';
import About from './components/About/about';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Categories />
    <About /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
