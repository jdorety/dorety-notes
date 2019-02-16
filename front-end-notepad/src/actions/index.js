import axios from "axios";

export const LOADING_LIST = "LOADING_LIST";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";
export const LOADING_NOTE = "LOADING_NOTE";
export const NOTE_SUCCESS = "NOTE_SUCCESS";
export const NOTE_FAILURE = "NOTE_FAILURE";

export const getList = () => dispatch => {
  dispatch({ type: LOADING_LIST });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      console.log(response);
      dispatch({ type: LIST_SUCCESS, list: response.data });
    })
    .catch(err => dispatch({ type: LIST_FAILURE, error: err.toString() }));
};

export const getNote = id => dispatch => {
  dispatch({ type: LOADING_NOTE });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => dispatch({ type: NOTE_SUCCESS, note: response.data }))
    .catch(err => dispatch({ type: NOTE_FAILURE, error: err.toString() }));
};
