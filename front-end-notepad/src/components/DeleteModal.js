import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions";

import "../styles/DeleteModal.css";

const DeleteModal = props => {
  function deleteNote() {
    props.deleteNote(props.id, props.history);
    props.toggle();
  }

  return (
    <div className="alert">
      <h3>Are you sure you want to delete this?</h3>
      <div className="delete-buttons">
        <button className="yes-delete" onClick={deleteNote}>
          Delete
        </button>
        <button className="no-delete" onClick={props.toggle}>
          No
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteNote }
)(DeleteModal);
