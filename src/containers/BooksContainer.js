import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchBooks } from "../actions/fetchBooks";
import Books from "../components/Books";
import Book from "../components/Book";
import BookInput from "../components/BookInput";

class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        <Route path="/books/new" component={BookInput} />
        <Route
          path="/books/:id"
          render={(routerProps) => (
            <Book {...routerProps} books={this.props.books} />
          )}
        />
        <Route
          exact
          path="/books"
          render={(routerProps) => (
            <Books {...routerProps} books={this.props.books} />
          )}
        />
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
