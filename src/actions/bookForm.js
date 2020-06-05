// synchronous action creators
export const updateBookForm = (name, value) => {
  return {
    type: "UPDATE_BOOK_FORM",
    formData: { name, value },
  };
};

export const resetBookForm = () => {
  return {
    type: "RESET_NEW_BOOK_FORM",
  };
};

export const setFormDataForEdit = (book) => {
  const bookFormData = {
    title: book.title,
    author: book.author,
    description: book.description,
  };
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    bookFormData,
  };
};
