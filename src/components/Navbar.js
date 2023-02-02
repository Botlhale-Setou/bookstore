import React from 'react';
import { Link } from 'react-router-dom';
import person from './user.svg';

const Navbar = () => (
  <nav>
    <div className="navMainCont">
      <h1>Bookstore CMS</h1>
      <ul className="navUL">
        <li>
          <Link to="/" className="navLink">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="navLink">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <img src={person} alt="Person" className="person" />
  </nav>
);

export default Navbar;
