//NavBar.js

import React from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import SignUp from "../SignUp/signUp";
import { connect } from 'react-redux';
import { clearUser } from "../../redux/userActions";

function NavBar({user, clearUser}) {

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
        <nav>
            <div>Signed in as: {user ? user.displayName : 'Guest'}</div>
            <Link to="/" onClick={logout}>Logout</Link>
        </nav>
    )
}


const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

// export default NavBar;
