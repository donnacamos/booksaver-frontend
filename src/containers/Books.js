import React, { Component } from "react";
import { connect } from "react-redux";
import BookCard from "../components/BookCard";
import { Card } from "semantic-ui-react";
import Stats from "../components/Stats";
import { Divider } from "semantic-ui-react";

class Books extends Component {
  state = { newSearch: "" };

  handleInputChange = (e) => {
    this.setState({ newSearch: e.target.value });
  };

  render() {
    //Destructure to extract data from objects into their own variable- ex: book instead this.props.book)
    const { booksReducer } = this.props;

    //copy bookss so sort does not mutate
    let topBooks = [...booksReducer.books].sort((a, b) =>
      a.users.length > b.users.length ? -1 : 1
    );
    let booksMatch = booksReducer.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.newSearch.toLowerCase())
    );

    return (
      <div className="Books">
        <input
          placeholder="bookTitle"
          value={this.state.newSearch}
          name="bookTitle"
          type="text"
          onChange={this.handleInputChange}
        />
        <Divider />
        <Stats
          numBooks={booksReducer.books.length}
          topThree={topBooks.slice(0, 3)}
        />
        <Divider />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booksReducer: state.booksReducer,
  };
};

export default connect(mapStateToProps)(Books);
