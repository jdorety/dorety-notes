import React from "react";
import axios from "axios";

const DeleteModal = props => {
  function deleteNote() {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${props.id}`)
      .then(response => {
        props.toggle();
        props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="alert">
      <h3>Are you sure you want to delete this?</h3>
      <div className="delete-buttons">
        <button name="yes" onClick={deleteNote}>
          Delete
        </button>
        <button name="no" onClick={props.toggle}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
