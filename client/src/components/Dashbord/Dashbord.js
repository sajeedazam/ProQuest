import React, { useState, useEffect } from 'react';
import Categories from '../Categories/categories';
import NavBar from '../Navbar/Navbar';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Chat from '../Chat/chat';

function Dashboard() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleChatButtonClick = () => {
    navigate('/chat');
  }

  return user ? (
    <div>
      <NavBar user={user} />    
      <Categories />
      <button onClick={handleChatButtonClick}>Chat with Professional</button>
    </div>
  ) : (
    <div>Loading...</div>  
  );
}

export default Dashboard;