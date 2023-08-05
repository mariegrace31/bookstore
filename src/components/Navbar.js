/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

const navLinks = [
  { path: '/', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <h1 className="logo">Bookstore CMS</h1>
          <ul className="nav-items">
            {
        navLinks.map((navLink) => (
          <li key={navLink.text} className="nav">
            <Link to={navLink.path} className="nav-link">{navLink.text}</Link>
          </li>
        ))
    }
          </ul>
        </div>
        <BsPersonCircle className="user-icon" />
      </div>
    </>
  );
}

export default Navbar;
