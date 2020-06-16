// React + Dependencies
import React from "react";
import { connect } from "react-redux";

// Import from Files
import { updateBookForm } from "../actions/bookForm";

// functional / stateless component
const BookForm = ({
  formData,
  updateBookForm,
  userId,
  book,
  handleSubmit,
  editMode,
}) => {
  const { title, author, description } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateBookForm(name, value);
  };

  return (
    <div>
      <form
        class="ui form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(formData, userId);
        }}
      >
        <h2>{editMode ? "Edit Your Book" : "Create a Book"}</h2>
        <label class="ui label">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <br />
        <br />

        <label className="ui label">Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
        />
        <br />
        <br />

        <label className="ui label">Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          class="ui button"
          type="submit"
          value={editMode ? "Edit Book" : "Create Book"}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.bookForm,
    userId,
  };
};

export default connect(mapStateToProps, { updateBookForm })(BookForm);
