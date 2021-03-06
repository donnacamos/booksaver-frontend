// React + Dependencies
import React from "react";
import { connect } from "react-redux";

// Import from Files
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

// functional / stateless component
const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history);
  };

  // Login Form
  return (
    <form class="ui form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input
        placeholder="email"
        value={loginFormData.email}
        type="text"
        name="email"
        onChange={handleInputChange}
      />
      <div class="ui pointing label">Sample email: frodobaggins@bagend.com</div>
      <br />
      <br />
      <input
        placeholder="password"
        value={loginFormData.password}
        type="password"
        name="password"
        onChange={handleInputChange}
      />
      <div class="ui pointing label">Sample password: OneRing2RuleThemAll</div>
      <br />
      <br />

      <input class="ui button" value="Log In" type="submit" />
    </form>
  );
};

// Reading states from Redux store
// we can now use these as props
const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
