import React from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../actions/fetchBooks";
import Books from "../components/Books";
import BookInput from "../components/BookInput";

class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        <BookInput />
        <Books books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, { fetchBooks })(BooksContainer);
