import { ADD_FAILURE, ADD_LOADING, ADD_SUCCESS } from "../actions";

const initialState = {
  addingNewNote: false,
  newNoteID: null,
  newNoteError: ""
};

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOADING:
      return {
        ...state,
        addingNewNote: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        newNoteID: action.id,
        addingNewNote: false
      };
    case ADD_FAILURE:
      return {
        ...state,
        newNoteError: action.error,
        addingNewNote: false
      };
    default:
      return state;
  }
};
