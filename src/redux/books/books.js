// Define constants
const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';
const INIT_STATE = [
  {
    id: 0,
    title: 'Mastery',
    author: 'Robert Greene',
  },
  {
    id: 1,
    title: 'The 48 Laws Of Power',
    author: 'Robert Greene',
  },
  {
    id: 2,
    title: 'The 12 Rules For Life',
    author: 'Jordan Peterson',
  },
];

// Define reducer
export default function booksReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REM_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Define actions
const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const remBook = (id) => ({
  type: REM_BOOK,
  id,
});

export { addBook, remBook };
