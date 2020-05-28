import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Router } from "react-router-dom";
import { fetchBooks } from "../actions/fetchBooks";
import Books from "../components/Books";
import Book from "../components/Book";
import BookInput from "../components/BookInput";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Authors from "../components/Authors";

class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books/new" component={BookInput} />
          <Route
            exact
            path="/books"
            render={(routerProps) => (
              <Books {...routerProps} books={this.props.books} />
            )}
          />
          <Route
            path="/books/:id"
            render={(routerProps) => (
              <Book {...routerProps} books={this.props.books} />
            )}
          />
          <Route path="/authors" component={Authors} />
          <Route path="/about" component={About} />
          {/* <Route path="/books/new" component={BookInput} />
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
          /> */}
        </Switch>
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
