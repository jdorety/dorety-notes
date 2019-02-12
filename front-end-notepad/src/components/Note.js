import React from "react";
import "../styles/Note.css";

const Note = props => {
  return (
    <div className="note-thumb">
      <div className="thumb-contents">
        <h3 className="note-header">{props.title}</h3>
        <p>{props.textBody}</p>
      </div>
    </div>
  );
};

export default Note;
