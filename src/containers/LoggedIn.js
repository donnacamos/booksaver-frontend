// React + Dependencies
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Import from Files
import NavBar from "../components/NavBar";
import MyBooks from "../components/MyBooks";
import BookCard from "../components/BookCard";
import NewBookFormWrapper from "../components/NewBookFormWrapper";
import EditBookFormWrapper from "../components/EditBookFormWrapper";

// functional / stateless component
const LoggedIn = ({ books, loggedIn }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/books" component={MyBooks} />
        <Route exact path="/books/new" component={NewBooksFormWrapper} />
        <Route
          exact
          path="/books/:id"
          render={(props) => {
            const book = books.find(
              (book) => book.id === parseInt(props.match.params.id)
            );
            return <BookCard book={book} {...props} />;
          }}
        />
        <Route
          exact
          path="/books/:id/edit"
          render={(props) => {
            const book = books.find(
              (book) => book.id === parseInt(props.match.params.id)
            );
            return <EditBookFormWrapper book={book} {...props} />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    books: state.myBooks,
  };
};

export default connect(mapStateToProps)(LoggedIn);
