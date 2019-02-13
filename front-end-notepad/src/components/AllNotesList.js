import React from "react";
import NoteThumb from "./NoteThumb";

import "../styles/AllNotesList.css";

const AllNotesList = props => {
  return (
    <div className="main-view">
      <h2 className="section-header">Your Notes:</h2>
      <div className="list-wrapper">
        {props.notes.map(note => {
          return <NoteThumb {...note} key={note._id} {...props} />;
        })}
      </div>
    </div>
  );
};

export default AllNotesList;
