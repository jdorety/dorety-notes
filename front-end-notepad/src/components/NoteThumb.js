import React from "react";
import "../styles/NoteThumb.css";

const NoteThumb = props => {
  function clickHandler(e) {
    props.history.push(`/notes/${props._id}`);
  }

  return (
    <div className="note-thumb" onClick={clickHandler}>
      <div className="note-header-wrapper">
        <h3 className="note-header">{props.title}</h3>
      </div>
      <div className="thumb-contents">
        <p>{props.textBody}</p>
      </div>
    </div>
  );
};

export default NoteThumb;
