import {
  LOADING_LIST,
  LIST_SUCCESS,
  LIST_FAILURE,
  LOADING_NOTE,
  NOTE_SUCCESS,
  NOTE_FAILURE,
  ADD_FAILURE,
  ADD_LOADING,
  ADD_SUCCESS
} from "../actions";

const initialState = {
  notes: [],
  noteDisplayed: {},
  loadingList: false,
  listError: "",
  loadingNote: false,
  noteError: "",
  newNoteID: null,
  newNoteError: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_LIST:
      return { ...state, loadingList: true };
    case LIST_SUCCESS:
      return { ...state, loadingList: false, notes: action.list };
    case LIST_FAILURE:
      return {
        ...state,
        loadingList: false,
        notes: [],
        listError: action.error
      };
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
    case ADD_LOADING:
      return {
        ...state,
        loadingList: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        newNoteID: action.id
      };
    case ADD_FAILURE:
      return {
        ...state,
        loadingList: false,
        newNoteError: action.error
      };
    default:
      return state;
  }
}
