import React from "react";
import Note from "./Note";

import "../styles/AllNotesList.css";

const AllNotesList = props => {
  return (
    <div className="notes-list">
      <h2 className="list-header">Your Notes:</h2>
      <div className="list-wrapper">
        {props.notes.map(note => {
          return <Note {...note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default AllNotesList;
