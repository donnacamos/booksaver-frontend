// React + Dependencies
import React from "react";
import { Link } from "react-router-dom";
// import moment from 'moment'

// functional / stateless component
const BookCard = ({ book }) => {
  return book ? (
    <div>
      <h2>{book.title}</h2>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
      <Link to={`/books/${book.id}/edit`}>Edit this Book</Link>
      <div class="ui hidden divider"></div>
      <div class="ui center aligned container"></div>
    </div>
  ) : (
    <p>Sorry! We couldn't find your book.</p>
  );
};

export default BookCard;
