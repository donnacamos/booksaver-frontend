import React from "react";

const Book = (props) => {
  console.log(props);
  return (
    <li>
      {props.book.title} - {props.book.description}
    </li>
  );
};

export default Book;
