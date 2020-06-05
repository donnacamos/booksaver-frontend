// Redux
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// Import from Files
import signupForm from "./reducers/signupForm";
import loginForm from "./reducers/loginForm";
import currentUser from "./reducers/currentUser";
import bookForm from "./reducers/bookForm";
import myBooks from "./reducers/myBooks";

// Combining Reducers
const reducer = combineReducers({
  signupForm,
  loginForm,
  currentUser,
  bookForm,
  myBooks,
});

//Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating the Store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
