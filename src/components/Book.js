import React from "react";

const Book = (props) => {
  console.log(props);
  let book = props.books[props.match.params.id - 1];
  console.log(book);
  return (
    <li>
      {book ? book.title : null} - {book ? book.description : null}
    </li>
  );
};

export default Book;
