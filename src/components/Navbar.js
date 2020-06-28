// React + Dependencies
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Import from Files
import Logout from "./Logout";

// functional / stateless component
const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <div class="ui secondary menu">
        <NavLink to="/books" class="item">
          <i class="home big icon"></i>
        </NavLink>
        <NavLink to="/books/new" class="item">
          <button class="ui positive button">Add a New Book</button>
        </NavLink>
        <div class="right menu">
          {loggedIn ? (
            <>
              <span class="item" id="loggedin">
                Logged in as {currentUser.username}
              </span>
              <Logout />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
