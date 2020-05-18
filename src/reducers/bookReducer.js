export default function bookReducer(state = { books: [] }, action) {
  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return { books: action.payload };
    default:
      return state;
  }
}
