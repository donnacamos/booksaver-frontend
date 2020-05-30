import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBookFormData } from "../actions/bookForm";
import { createBook } from "../actions/books";
import { Form, Icon, Divider } from "semantic-ui-react";

class BookForm extends Component {
  handleOnChange = (event) => {
    const { name, value } = event.target;
    const currentBookFormData = Object.assign({}, this.props.bookFormData, {
      [name]: value,
    });

    this.props.updateBookFormData(currentBookFormData);
  };

  handleonSubmit = (event) => {
    event.preventDefault();
    //console.log(this.props.bookFormData)

    const { createBook, bookFormData } = this.props;
    createBook(bookFormData);
  };

  render() {
    const { title, author, description } = this.props.bookFormData;
    return (
      <div>
        <Divider />

        <Form onSubmit={this.handleonSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Title"
              onChange={this.handleOnChange}
              placeholder="Title"
              value={title}
              name="title"
            />
            <Form.Input
              fluid
              label="Author"
              onChange={this.handleOnChange}
              placeholder="Author"
              value={author}
              name="author"
            />
            <Form.Input
              fluid
              label="Description"
              onChange={this.handleOnChange}
              placeholder="Description"
              value={description}
              name="description"
            />
          </Form.Group>

          <button className="button button-add" type="submit" value="Add Book">
            Add Book
          </button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookFormData: state.bookFormData,
    //errors: state.errors
  };
};

export default connect(mapStateToProps, { updateBookFormData, createBook })(
  BookForm
);
