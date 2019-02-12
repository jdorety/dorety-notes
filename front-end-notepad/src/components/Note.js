import React from "react";

const Note = props => {
  return (
    <div className="note-thumb">
      <h3>{props.title}</h3>
      <p>{props.textBody}</p>
    </div>
  );
};

export default Note;
