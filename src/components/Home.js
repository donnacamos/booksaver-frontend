import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="Home">
      <h3>Welcome to Book Haven</h3>
      <p>
        save all your favorite books and find new books from other book lovers
      </p>
      {/* <img
        src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="Books"
      /> */}
      <div>
        <h4>
          <Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link>{" "}
          to get started.
        </h4>
        <div class="ui hidden divider"></div>
        <div class="ui divider"></div>
      </div>
    </div>
  );
};

export default Home;
