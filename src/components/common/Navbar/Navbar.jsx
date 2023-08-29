import React from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <div className="logoContainer">
            <Link to="/">
                <h4>Arunoday .</h4>
            </Link>
            </div>

            <div className="middleSearchbar">

            </div>

            <div className="options">
                <h4>Auctions</h4>
                <h4>Bids</h4>
                <h4>Sign Up</h4>
                <h4>Login</h4>
            </div>

        </div>
    </div>
  )
}

export default Navbar