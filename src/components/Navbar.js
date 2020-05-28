import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "../App.css";

const NavBar = () => {
  return (
    <div className="nav">
      <Menu>
        <Link to="/" className="item">
          Home
        </Link>
        |
        <Link to="/books/new" className="item">
          Add Book
        </Link>
        |
        <Link to="/books" className="item">
          Books
        </Link>
        |
        <Link to="/authors" className="item">
          Authors
        </Link>
        |
        <Link to="/about" className="item">
          About Us
        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;
