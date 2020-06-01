import { resetBookForm } from "./bookForm";
import { getBookOwnerships } from "./bookOwnerships";

// ** Synchronous Actions Creators **
// Action creators create actions which are plain objects →
// Actions are dispatched to the store →
// the store invokes reducers →
// reducers generate new state

export const fetchBooksSuccess = (books) => {
  return {
    type: "GET_ALL_BOOKS_SUCCESS",
    books,
  };
};

export const addBook = (book) => {
  return {
    type: "CREATE_BOOK_SUCCESS",
    book,
  };
};

// ** Asynchronous Action Creators **
// If a function (e.g. a thunk) is dispatched, redux-thunk calls that function, passing in the store's dispatch and getState.
// The middleware intercepts the thunk so it does not go directly to the reducer
// When that async fetch resolves,the callback can dispatch a normal action to the store.

export const getAllBooks = () => {
  //thunk is function returned by another function
  //allows dispatch of actions inside the returned function
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    //fetch returns a promise we are waiting to resolve
    return (
      fetch("http://localhost:3000/api/v1/books", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        //when resolved, parse response data to JSON
        .then((r) => r.json())
        //dispatch action to set toys and send to reducer to update state
        .then((books) => {
          dispatch(fetchBooksSuccess(books));
          dispatch(getBookOwnerships());
        })
        //if Promise is rejected
        .catch((error) => {
          console.log("Error: ", error);
        })
    );
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((r) => r.json())
      .then((book) => {
        dispatch(addBook(book));
        dispatch(resetBookForm());
      });
  };
};
