import axios from "axios";

export const LOADING_LIST = "LOADING_LIST";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";
export const LOADING_NOTE = "LOADING_NOTE";
export const NOTE_SUCCESS = "NOTE_SUCCESS";
export const NOTE_FAILURE = "NOTE_FAILURE";
export const ADD_LOADING = "ADD_LOADING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const WAIT_ON_DELETE = "WAIT_ON_DELETE";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

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

export const addNote = (note, history) => dispatch => {
  dispatch({ type: ADD_LOADING });
  axios
    .post(`https://fe-notes.herokuapp.com/note/create`, note)
    .then(response => {
      console.log(response);
      dispatch({ type: ADD_SUCCESS, id: response.data.success });
      history.push("/");
    })
    .catch(err => dispatch({ type: ADD_FAILURE, error: err }));
};

export const deleteNote = (id, history) => dispatch => {
  dispatch({ type: WAIT_ON_DELETE });
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log(response);
      dispatch({ type: DELETE_SUCCESS });
      history.push("/");
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_FAILURE, error: err });
    });
};

export const editNote = (id, note, history) => dispatch => {
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
      console.log("edit reducer", response);
      history.push(`/notes/${response.data._id}`);
    })
    .catch(err => console.log(err));
};