//NavBar.js

import React from "react";
import { Link } from 'react-router-dom';
import { auth } from "/Users/rahul/Desktop/cpsc455group/ProQuest/src/components/firebase.js";
import { signOut } from 'firebase/auth';
import SignUp from "../SignUp/signUp";

function NavBar({user}) {

    const logout = () => {
        signOut(auth)
        .then(() => {
            console.log('User logged out');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <nav>
            <div>Signed in as: {user.displayName}</div>
            <Link to="/" onClick={logout}>Logout</Link>
        </nav>
    )
}

export default NavBar;
