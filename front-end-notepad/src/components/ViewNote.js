import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getNote } from "../actions";

import DeleteModal from "./DeleteModal";

import "../styles/ViewNote.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function ViewNote(props) {
  const [noteId, setId] = useState(props.match.params.id);
  const [showDelete, setDelete] = useState(false);

  const classes = useStyles();

  // getNote = () => {
  //   axios
  //     .get(`https://fe-notes.herokuapp.com/note/get/${noteId}`)
  //     .then(response => setState({ note: response.data, loading: false }))
  //     .catch(err => console.log(err));
  // };

  useEffect(() => {
    props.getNote(noteId);
  }, []);

  // componentDidUpdate() {
  //   getNote();
  // }

  const toggleDelete = () => {
      setDelete(!showDelete)
  };

  const editHandler = () => {
    props.history.push(`/notes/${noteId}/edit`);
  };

  return (
    <div className="main-view">
      <div className="note-wrapper">
        {showDelete && (
          <DeleteModal
            id={noteId}
            history={props.history}
            toggle={toggleDelete}
          />
        )}
        {props.error && <h2>{props.error}</h2>}
        {props.loading && <h2>Loading</h2>}

        <div className="header-wrapper">
          <div className={classes.root}>
            <Fab onClick={editHandler}>edit</Fab>
            <button className="edit-buttons" onClick={toggleDelete}>
              delete
            </button>
          </div>
          <h2 className="note-title">{props.note.title}</h2>
        </div>
        <p className="note-body">{props.note.textBody}</p>
      </div>
    </div>
  );
}

const mstp = state => {
  return {
    note: state.note.noteDisplayed,
    loading: state.note.loadingNote,
    error: state.note.noteError
  };
};

ViewNote.propTypes = {
  error: PropTypes.string,
  getNote: PropTypes.func,
  history: PropTypes.object,
  loading: PropTypes.bool,
  match: PropTypes.object,
  note: PropTypes.object
};

export default connect(mstp, { getNote })(ViewNote);
