export const addBook = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/books", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(book => dispatch({type: "ADD_BOOK", payload: book}))
  };
};
