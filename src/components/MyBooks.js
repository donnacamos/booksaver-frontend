// React + Dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";

import Counter from "./Counter";

// functional / stateless component
const MyBooks = (props) => {
  const bookCards =
    props.books.length > 0 ? (
      props.books.map((b) => (
        <Link to={`/books/${b.id}`} key={b.id}>
          <button
            class="ui blue huge button"
            style={{ display: "block", margin: "1em" }}
          >
            {b.title}
          </button>
          <Counter /> 
        </Link>
      ))
    ) : (
      <p>
        You currently have no books. <Link to="/books/new">Add a Book</Link> to
        get started!
      </p>
    );

  return bookCards;
};

const mapStateToProps = (state) => {
  return {
    books: state.myBooks,
  };
};

export default connect(mapStateToProps)(MyBooks);
