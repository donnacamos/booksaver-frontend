import React from "react";
// import { render } from "@testing-library/react";

const Authors = (props) => {
  return (
    <div>
      {props.authors &&
        props.authors.map((author) => (
          <li key={author.id}>
            {author.firstName} - {author.lastName}
          </li>
        ))}
    </div>
  );
};

export default Authors;
