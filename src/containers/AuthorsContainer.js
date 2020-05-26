import React from "react";
import AuthorInput from "../components/AuthorInput";
import Authors from "../components/Authors";

class AuthorsContainer extends React.Component {
  render() {
    return (
      <div>
        <AuthorInput />
        <Authors authors={this.props.book && this.props.book.authors} />
      </div>
    );
  }
}

export default AuthorsContainer;
