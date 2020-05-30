import React from "react";
import { Divider } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="Home">
      <Divider />

      <h3>Welcome to Book Haven</h3>
      <p>
        save all your favorite books and find new books from other book lovers
      </p>
      <img
        src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="Books"
      />
    </div>
  );
};

export default Home;
