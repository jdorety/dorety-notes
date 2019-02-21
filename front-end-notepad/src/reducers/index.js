import {
  LOADING_LIST,
  LIST_SUCCESS,
  LIST_FAILURE,
  LOADING_NOTE,
  NOTE_SUCCESS,
  NOTE_FAILURE,
  ADD_FAILURE,
  ADD_LOADING,
  ADD_SUCCESS,
  WAIT_ON_DELETE,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from "../actions";

const initialState = {
  notes: [],
  noteDisplayed: {},
  loadingList: false,
  listError: "",
  loadingNote: false,
  noteError: "",
  addingNewNote: false,
  newNoteID: null,
  newNoteError: "",
  deleteError: "",
  deleteInProgress: false,
  deleteSuccess: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_LIST:
      return { ...state, loadingList: true, listError: "" };
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
    case WAIT_ON_DELETE:
      return {
        ...state,
        deleteInProgress: true,
        deleteSuccess: false,
        deleteError: ""
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deleteInProgress: false,
        deleteSuccess: true,
        deleteError: ""
      };
    case DELETE_FAILURE:
      return {
        ...state,
        deleteInProgress: false,
        deleteSuccess: false,
        deleteError: action.error
      };
    default:
      return state;
  }
}
