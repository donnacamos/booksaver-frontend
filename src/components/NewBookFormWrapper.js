// React + Dependencies
import React from "react";
import { connect } from "react-redux";

// Import from Files
import { createList } from "../actions/myLists";
import BookForm from "./BookForm";

// functional / stateless component
const NewBookFormWrapper = ({ history, createList }) => {
  const handleSubmit = (formData, userId) => {
    createList(
      {
        ...formData,
        userId,
      },
      history
    );
  };

  return <BookForm history={history} handleSubmit={handleSubmit} />;
};

export default connect(null, { createList })(NewBookFormWrapper);
