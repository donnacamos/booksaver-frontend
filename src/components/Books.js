import React from "react";

const Books = (props) => {
  return (
    <div>
      {props.books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.author}
        </li>
      ))}
    </div>
  );
};

export default Books;
