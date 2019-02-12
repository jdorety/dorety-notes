import React from "react";

const AllNotesList = props => {
  return (
    <div className="all wrapper">
      {props.notes.map(note => {
        return (
          <div className="note-thumb" key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.textBody}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllNotesList;
