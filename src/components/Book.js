import React from "react";
// import { Redirect } from "react-router-dom";
import AuthorsContainer from "../containers/AuthorsContainer.js";

const Book = (props) => {
  let book = props.books[props.match.params.id - 1];
  console.log(book);
  return (
    <>
      <div>
        <h3>{book ? book.title : null}</h3>
        <AuthorsContainer book={book} />
        <p>{book ? book.description : null}</p>
      </div>
    </>
  );
};

export default Book;
