export const fetchBooks = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/books")
      .then((response) => response.json())
      .then((books) =>
        dispatch({
          type: "FETCH_BOOKS",
          payload: books,
        })
      );
  };
};
