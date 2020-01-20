import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Note from "./Note";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getNote } from "../../actions";

import DeleteModal from "../DeleteModal";

import "../../styles/ViewNote.css";

const useStyles = makeStyles(theme => ({
  edit: {
    justifyContent: "flex-end",
    maxWidth: theme.spacing(90)
  }
}));

function ViewNote(props) {
  const [showDelete, setDelete] = useState(false);
  const noteId = props.match.params.id;

  const classes = useStyles();

  useEffect(() => {
    props.getNote(noteId);
  }, []);

  const toggleDelete = () => {
    setDelete(!showDelete);
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

        <Note {...props.note}>
          <div className={classes.edit}>
            <Fab onClick={editHandler} size="small">
              <Edit fontSize="large"></Edit>
            </Fab>
            <Fab size="small" onClick={toggleDelete}>
              <Delete fontSize="large"></Delete>
            </Fab>
          </div>
        </Note>
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
