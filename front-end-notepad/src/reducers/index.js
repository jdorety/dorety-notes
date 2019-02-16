import { LOADING_LIST, LIST_SUCCESS, LIST_FAILURE } from "../actions";

const initialState = {
  notes: [],
  loadingList: false,
  listError: ""
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
    default:
      return state;
  }
}
