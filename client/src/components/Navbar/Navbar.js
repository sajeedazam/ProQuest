import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import { clearUser } from "../../redux/userActions";
import Cart from '../Cart/cart';

function NavBar({ clearUser }) {
    const [displayName, setDisplayName] = useState("Guest");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setDisplayName(user ? user.displayName : "Guest");
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth)
        .then(() => {
            console.log('User logged out');
        })
        .catch((error) => {
            console.log(error);
        });
        clearUser()
    }

    return (
        <nav className="navbar">
            <div>
              <div>Signed in as: {displayName}</div>
              <Cart />
            </div>
            <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
        </nav>
    )
}

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(clearUser()),
});

export default connect(null, mapDispatchToProps)(NavBar);
