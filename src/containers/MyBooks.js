import React, { Component } from "react";
import { connect } from "react-redux";
import BookCard from "../components/BookCard";
import { Card, Divider } from "semantic-ui-react";

class MyBook extends Component {
  render() {
    //Destructure to extract data from objects into their own variable- ex: book instead this.props.book)
    const { booksReducer } = this.props;

    return (
      <div className="My Books">
        <Divider hidden />

        {booksReducer.currentUser.username ? (
          <h3>{booksReducer.currentUser.username}'s Books</h3>
        ) : (
          <strong>Log in or sign up</strong>
        )}

        <Divider hidden />

        <Card.Group itemsPerRow={3}>
          {booksReducer.userBooks.map((book, id) => (
            <BookCard
              numUsers={book.users.length}
              claimed={book.claimed}
              key={id}
              book={book}
            />
          ))}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booksReducer: state.booksReducer,
  };
};

export default connect(mapStateToProps)(MyBooks);
