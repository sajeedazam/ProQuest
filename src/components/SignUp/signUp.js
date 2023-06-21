// import React, { useState } from 'react';

// const SignupPage = () => {
//   const [name, setName] = useState('');
//   const [workHours, setWorkHours] = useState('');
//   const [city, setCity] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleWorkHoursChange = (e) => {
//     setWorkHours(e.target.value);
//   };

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform signup logic here using the collected data
//     console.log('Name:', name);
//     console.log('Work Hours:', workHours);
//     console.log('City:', city);
//   };

//   return (
//     <div>
//       <h2>Signup Page</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={handleNameChange}
//         />

//         <label htmlFor="workHours">Work Hours:</label>
//         <input
//           type="text"
//           id="workHours"
//           value={workHours}
//           onChange={handleWorkHoursChange}
//         />

//         <label htmlFor="city">City:</label>
//         <input
//           type="text"
//           id="city"
//           value={city}
//           onChange={handleCityChange}
//         />

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "/Users/rahul/Desktop/cpsc455group/ProQuest/src/components/firebase.js";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-in-container">
//       <form onSubmit={signUp}>
//         <h1>Create Account</h1>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from '../firebase';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // The user has been created successfully, now update displayName field
        return updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });
      })
      .then(() => {
        setMessage('Account created successfully');
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
