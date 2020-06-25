import React from "react";

import { Link } from "react-router-dom";
// import { Menu } from 'semantic-ui-react';

// import '../App.css';

const NavBar = () => {
  return (
    <div className="nav">
        <Link to="/" className="item">
          Home
        </Link>

        <Link to="/books" className="item">
          View All Books
        </Link>

        <Link to="/myBooks" className="item">
          View My Books
        </Link>

        <Link to="/about" className="item">
          About Us
        </Link>
    </div>
  );
};

export default NavBar;
