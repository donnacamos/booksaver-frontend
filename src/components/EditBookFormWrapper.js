// React + Dependencies
import React from "react";
import { connect } from "react-redux";

// Import from Files
import { updateBook, deleteBook } from "../actions/myBooks";
import { setFormDataForEdit, resetBookForm } from "../actions/bookForm";
import BookForm from "./BookForm";

// Class Component because we need to use ComponentDidMount to populate our form input
class EditBookFormWrapper extends React.Component {
  componentDidMount() {
    this.props.book && this.props.setFormDataForEdit(this.props.book);
  }

  //This will populate the Update Form if accessed from URL
  componentDidUpdate(prevProps) {
    this.props.book &&
      !prevProps.book &&
      this.props.setFormDataForEdit(this.props.book);
  }

  //This will clear the form if we leave the page.
  componentWillUnmount() {
    this.props.resetBookForm();
  }

  handleSubmit = (formData) => {
    const { updateBook, book, history } = this.props;

    updateBook(
      {
        ...formData,
        bookId: book.id,
      },
      history
    );
  };

  render() {
    const { history, deleteBook, book } = this.props;
    const bookId = book ? book.id : null;
    return (
      <>
        <BookForm editMode handleSubmit={this.handleSubmit} />
        <br />
        <button
          class="ui negative button"
          onClick={() => deleteBook(bookId, history)}
        >
          Delete Book
        </button>
      </>
    );
  }
}

export default connect(null, {
  updateBook,
  setFormDataForEdit,
  resetBookForm,
  deleteBook,
})(EditBookFormWrapper);
