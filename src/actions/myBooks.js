// Import from Files
import { resetBookForm } from "./bookForm";

//synchronous actions
export const setMyBooks = (books) => {
  return {
    type: "SET_MY_BOOKS",
    books,
  };
};

export const clearBooks = () => {
  return {
    type: "CLEAR_BOOKS",
  };
};

export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    book,
  };
};

export const deleteBookSuccess = (bookId) => {
  return {
    type: "DELETE_BOOK_SUCCESS",
    bookId,
  };
};

export const updateBookSuccess = (book) => {
  return {
    type: "UPDATE_BOOK_SUCCESS",
    book,
  };
};

//async actions
export const getMyBooks = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setMyBooks(response));
        }
      })
      .catch(console.log);
  };
};

export const createBook = (bookData, history) => {
  return (dispatch) => {
    const sendableBookData = {
      title: bookData.title,
      author: bookData.author,
      description: bookData.description,
      user_id: bookData.userId,
    };
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendableBookData),
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(addBook(resp));
          dispatch(resetBookForm());
          history.push(`/books/${resp.id}`);
        }
      })
      .catch(console.log);
  };
};

export const updateBook = (bookData, history) => {
  return (dispatch) => {
    const sendableBookData = {
      title: bookData.title,
      author: bookData.author,
      description: bookData.description,
    };
    return fetch(`http://localhost:3000/api/v1/books/${bookData.bookId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendableBookData),
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(updateBookSuccess(resp));
          history.push(`/books/${resp.id}`);
        }
      })
      .catch(console.log);
  };
};

export const deleteBook = (bookId, history) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/books/${bookId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(deleteBookSuccess(bookId));
          history.push(`/books`);
        }
      })
      .catch(console.log);
  };
};
