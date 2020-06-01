import { clearLoginForm } from "../actions/loginForm";
import { resetSignupForm } from "../actions/signupForm";
import store from "../store";
//import history from '../history';

//action needs a key of type

// Synchronous action creators
export const setCurrentUser = (user, books) => {
  return {
    type: "SET_CURRENT_USER",
    user,
    books,
  };
};

export const setMyBooks = (user, books) => {
  return {
    // type: "GET_MY_BOOKS_SUCCESS",
    type: "GET_USER_BOOKS_SUCCESS",

    user,
    books,
  };
};

export const markAsClaimed = (user, books) => {
  return {
    type: "MARK_AS_CLAIMED",

    user,
    books,
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};

// Asynchronous action creators
export const login = (credentials) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));

          dispatch(getMyBooks(user));
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser());
    return fetch(`http://localhost:3000/api/v1/logout`, {
      credentials: "include",
      method: "DELETE",
    })
      .then((r) => r.json())

      .then(() => {
        dispatch(clearLoginForm());
        //history.push("/books")
      });
  };
};

export const getMyBooks = (user) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((u) => {
        if (u.error) {
          alert(u.error);
        } else {
          let b = store.getState().booksReducer;
          dispatch(setMyBooks(u, b.books));

          dispatch(markAsClaimed(u, b.books));
        }
      });
  };
};

export const signup = (credentials) => {
  return (dispatch) => {
    const userInfo = {
      user: credentials,
    };
    console.log("userInfo", userInfo);

    return fetch(`http://localhost:3000/api/v1/signup`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.errors) {
          alert(user.errors);
        } else {
          console.log("response data", user);

          dispatch(setCurrentUser(user));
          dispatch(resetSignupForm());
        }
      })
      .catch(console.log);
  };
};
