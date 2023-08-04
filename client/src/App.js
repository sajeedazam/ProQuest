// import React from 'react';
// import './App.css';
// import Login from './components/Login/login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Categories from './components/Categories/categories';
// import About from './components/About/about';
// import Chat from './components/Chat/chat';
// import JobsList from './components/Jobs/jobsList';
// import SignupPage from './components/SignUp/signUp';
// import ProfessionalHomescreen from './components/pHomepage/phomepage.js'
// import AuthDetails from './auth/AuthDetails';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashbord/Dashbord';
// import HomePage from './components/HomePage/HomePage';
// import LoginProfessional from './components/Login-Professional/LoginProfessional';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import CartPage from './components/Cart/cartPage';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const stripePromise = loadStripe('pk_test_51NbH0oD8wtfz1dRK1wDw3n8ziesmlB2h1vutlWQjhnyAAIVfYAUbAk5LbJR4dnn99OD0JIdGzEMCYld4ZWxS9NgS00ErzV8MbK'); // Replace with your Stripe public key

// function App() {
//   return (
//     <Provider store={store}>
//     <Router>
//       <div className="App">
//         <Routes>
//         <Route path="/" element={<HomePage />} />
//           <Route path="/jobs" element={<JobsList />} />
//           <Route path="/login-customer" element={<Login />} />
//           <Route path="/login-professional" element={<LoginProfessional />} />
//           <Route path="/signUp" element={<SignupPage />} />
//           <Route path="/auth" element={<AuthDetails />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/professional" element={<ProfessionalHomescreen />} />
//           <Route path="/cart" element={<CartPage/>} />
//           <Route path="/chat" element={<Chat />} />
//           {/* <Route path="/chat-customer" element={<Chat />} /> */}
//         </Routes>
//       </div>
//     </Router>
//     </Provider>

//   );
// }

// export default () => (
//   <Elements stripe={stripePromise}>
//     <App />
//   </Elements>
// );

import React from 'react';
import './App.css';
import Login from './components/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories/categories';
import About from './components/About/about';
import Chat from './components/Chat/chat';
import JobsList from './components/Jobs/jobsList';
import SignupPage from './components/SignUp/signUp';
import ProfessionalHomescreen from './components/pHomepage/phomepage.js'
import AuthDetails from './auth/AuthDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashbord/Dashbord';
import HomePage from './components/HomePage/HomePage';
import LoginProfessional from './components/Login-Professional/LoginProfessional';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartPage from './components/Cart/cartPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';

const stripePromise = loadStripe('pk_test_51NbH0oD8wtfz1dRK1wDw3n8ziesmlB2h1vutlWQjhnyAAIVfYAUbAk5LbJR4dnn99OD0JIdGzEMCYld4ZWxS9NgS00ErzV8MbK'); // Replace with your Stripe public key

Modal.setAppElement('#root'); // Set the app element for react-modal

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsList />} />
            <Route path="/login-customer" element={<Login />} />
            <Route path="/login-professional" element={<LoginProfessional />} />
            <Route path="/signUp" element={<SignupPage />} />
            <Route path="/auth" element={<AuthDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/professional" element={<ProfessionalHomescreen />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default () => (
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
);
