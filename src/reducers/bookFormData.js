const initialState = {
  title: "",
  author: "",
  description: "",
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return action.bookFormData;

    case "RESET_BOOK_FORM":
      return initialState;

    default:
      return state;
  }
};
