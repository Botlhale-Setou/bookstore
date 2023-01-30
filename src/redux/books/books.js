// Define constants
const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';
const INIT_STATE = [];

// Define reducer
const booksReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case REM_BOOK:
      return state.map((book) => {
        if (book.id !== action.id) {
          return book;
        }
        return state;
      });
    default:
      return state;
  }
};

// Define actions
const addBook = () => ({
  type: ADD_BOOK,
});

const remBook = () => ({
  type: REM_BOOK,
});

export { booksReducer, addBook, remBook };
