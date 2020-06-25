// React and Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";

// Import from Files
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
