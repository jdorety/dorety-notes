import React from "react";
import "../styles/Note.css";

const Note = props => {
  function clickHandler(e) {
    props.history.push(`/notes/${props._id}`);
  }

  return (
    <div className="note-thumb" onClick={clickHandler}>
      <div className="thumb-contents">
        <h3 className="note-header">{props.title}</h3>
        <p>{props.textBody}</p>
      </div>
    </div>
  );
};

export default Note;
