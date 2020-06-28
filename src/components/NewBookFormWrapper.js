// React + Dependencies
import React from "react";
import { connect } from "react-redux";

// Import from Files
import { createBook } from "../actions/myBooks";
import BookForm from "./BookForm";

// functional / stateless component
const NewBookFormWrapper = ({ history, createBook }) => {
  const handleSubmit = (formData, userId) => {
    createBook(
      {
        ...formData,
        userId,
      },
      history
    );
  };

  return <ListForm history={history} handleSubmit={handleSubmit} />;
};

export default connect(null, { createBook })(NewBookFormWrapper);
