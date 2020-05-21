import React from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/addBook";

class BookInput extends React.Component {
  state = { title: "", firstName: "", lastName: "", description: "" };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBook(this.state);
    this.setState({
      title: "",
      firstName: "",
      lastName: "",
      description: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add a Book</h2>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
          <br></br>
          <p>Author</p>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange}
          />
          <br></br>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
          <br></br>
          <label>Description:</label>
          <textarea
            type="text"
            placeholder="description"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addBook })(BookInput);
