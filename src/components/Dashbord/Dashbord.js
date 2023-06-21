import React from 'react';
import Categories from '../Categories/categories';
import About from '../About/about';
import City from '../City/city';
import NavBar from '../Navbar/Navbar';
import { useEffect, useState } from "react";
import { auth } from "/Users/rahul/Desktop/cpsc455group/ProQuest/src/components/firebase.js";
import { onAuthStateChanged } from 'firebase/auth';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return user ? (
    <div>
      <NavBar user={user} />
      <About />
      <City />
      <Categories />
    </div>
  ) : (
    <div>Loading...</div>  
  );
}

export default Dashboard;