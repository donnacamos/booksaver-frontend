// React + Dependencies
import React from "react";
import { Link } from "react-router-dom";
// import moment from "moment";

// functional / stateless component
const BookCard = ({ book }) => {
  return book ? (
    <div>
      <h2>{book.title}</h2>
      <Link to={`/books/${book.id}/edit`}>Edit this Book</Link>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
    </div>
  ) : (
    <p>Sorry! We couldn't find your book.</p>
  );
};

export default BookCard;
