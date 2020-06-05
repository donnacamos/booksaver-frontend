const initialState = [];

export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_BOOKS":
      return action.books;
    case "ADD_BOOK":
      return state.concat(action.book);
    case "CLEAR_BOOKS":
      return initialState;
    case "UPDATE_BOOK_SUCCESS":
      return state.map((book) =>
        book.id === action.book.id ? action.book : book
      );
    case "DELETE_BOOK_SUCCESS":
      return state.filter((book) => (book.id === action.bookId ? false : true));
    default:
      return state;
  }
};
