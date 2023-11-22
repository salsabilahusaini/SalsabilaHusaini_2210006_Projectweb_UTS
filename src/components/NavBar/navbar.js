import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo1' />
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem" >Home</Link>
        <Link to="/about" className="desktopMenuListItem" >About</Link>
        <Link to="/galery" className="desktopMenuListItem" >Galery</Link>
        <Link to="/contact" className="desktopMenuListItem" >Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;