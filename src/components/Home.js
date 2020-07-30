// React + Dependencies
import React from "react";
import { Link } from "react-router-dom";

// functional / stateless component
const Home = () => (
  <div>
    <h1>Welcome to Book Haven</h1>
    <br></br>
    <img
      src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="Books"
    />
    <br></br>
    <h4>
      <Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link> to
      get started.
    </h4>
    <div class="ui hidden divider"></div>
    <div class="ui divider"></div>
  </div>
);

export default Home;
