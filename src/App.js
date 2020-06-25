// React & Dependencies
import React from "react";

import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import Books from "./containers/Books";
import BookForm from "./components/BookForm";
import MyBooks from "./containers/MyBooks";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { getAllBooks } from "./actions/books";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";

// Import from Files
// import { getCurrentUser } from "./actions/currentUser";
// import LoggedOut from "./containers/LoggedOut";
// import LoggedIn from "./containers/LoggedIn";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllBooks();
  }

  render() {
    let loggedIn = this.props.booksReducer.currentUser.username;

    return (
      <div>
        <Router >
          <div className="App">
            <NavBar />

            <h3>Book Haven</h3>

            {loggedIn ? (
              <Logout />
            ) : (
              <div>
                {" "}
                <Login /> <Signup />
              </div>
            )}
            {loggedIn ? <BookForm /> : ""}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/books" component={Books} />
              <Route path="/myBooks" component={MyBooks} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booksReducer: state.booksReducer,
  };
};

export default connect(mapStateToProps, { getAllBooks })(App);
