import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './components.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navContent">
      <h1>Bookstore CMS</h1>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>

    <p>Something</p>
  </div>
);

export default Navbar;
