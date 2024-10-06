import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav>
      <Link to="/" className="title" onClick={toggleMenu}>
        <img
          src="https://e7.pngegg.com/pngimages/224/1014/png-clipart-my-new-restaurant-logo-bistro-cafe-ermita-conrad-manila-restaurant-restaurant-logo-food-text-thumbnail.png"
          alt="Website Logo"
          className="logo"
        />{' '}
        Restorant Management System
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={toggleMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/staff" onClick={toggleMenu}>
            Staff
          </Link>
        </li>
        <li>
          <Link to="/kitchen" onClick={toggleMenu}>
            Kitchen
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
