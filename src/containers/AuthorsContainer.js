import React from "react";
import AuthorInput from "../components/AuthorInput";
import Authors from "../components/Authors";

class AuthorsContainer extends React.Component {
  render() {
    return (
      <div>
        <AuthorInput />
        <Authors author={this.props.book.author} />
      </div>
    );
  }
}

export default AuthorsContainer;
