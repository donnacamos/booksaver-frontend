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
      <div className="ui secondary menu">
        <NavLink to="/lists" className="item">
          <i className="home big icon"></i>
        </NavLink>
        <NavLink to="/lists/new" className="item">
          <button className="ui positive button">Create a New List</button>
        </NavLink>
        <div className="right menu">
          {loggedIn ? (
            <>
              <span className="item" id="loggedin">
                Logged in as {currentUser.name}
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
