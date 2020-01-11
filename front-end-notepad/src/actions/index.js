import axios from "axios";
require("dotenv").config();

const url = process.env.REACT_APP_API_URL || null;

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
    .get(`${url}/get/all`)
    .then(response => {
      dispatch({ type: LIST_SUCCESS, list: response.data });
    })
    .catch(err => dispatch({ type: LIST_FAILURE, error: err.toString() }));
};

export const getNote = id => dispatch => {
  dispatch({ type: LOADING_NOTE });
  axios
    .get(`${url}/get/${id}`)
    .then(response => {
      console.log(response);
      response.data.message
        ? dispatch({ type: NOTE_FAILURE, error: response.data.message })
        : dispatch({ type: NOTE_SUCCESS, note: response.data });
    })
    .catch(err => dispatch({ type: NOTE_FAILURE, error: err.toString() }));
};

export const addNote = (note, history) => dispatch => {
  dispatch({ type: ADD_LOADING });
  axios
    .post(`${url}/create`, note)
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
    .delete(`${url}/delete/${id}`)
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
    .put(`${url}/edit/${id}`, note)
    .then(response => {
      history.push(`/notes/${response.data._id}`);
    })
    .catch(err => console.log(err));
};
