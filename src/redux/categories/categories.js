// Defining constants
const COMPLETED = 'COMPLETED';
const IN_PROGRESS = 'IN_PROGRESS';
const INIT_STATE = [];

// Defining reducer
const categoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case COMPLETED:
      return 'under construction';
    case IN_PROGRESS:
      return 'under construction';
    default:
      return state;
  }
};

// Defining action creators
const setCompleted = () => ({
  type: COMPLETED,
});

const setInProgress = () => ({
  type: IN_PROGRESS,
});

export { categoryReducer, setCompleted, setInProgress };
