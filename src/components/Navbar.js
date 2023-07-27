import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

function Navbar() {
  return (
    <>
      {
        navLinks.map((navLink) => (
          <li key={navLink.text}>
            <Link to={navLink.path}>{navLink.text}</Link>
          </li>
        ))
    }
    </>
  );
}

export default Navbar;
