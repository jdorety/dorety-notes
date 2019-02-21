import { LOADING_NOTE, NOTE_SUCCESS, NOTE_FAILURE } from "../actions";

const initialState = {
  noteDisplayed: {},
  loadingNote: false,
  noteError: ""
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_NOTE:
      return {
        ...state,
        loadingNote: true
      };
    case NOTE_SUCCESS:
      return {
        ...state,
        loadingNote: false,
        noteError: "",
        noteDisplayed: action.note
      };
    case NOTE_FAILURE:
      return {
        ...state,
        loadingNote: false,
        noteError: action.error
      };
    default:
      return state;
  }
};
