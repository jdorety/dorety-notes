import React from "react";
import Note from "./Note";

const AllNotesList = props => {
  return (
    <div className="all wrapper">
      {props.notes.map(note => {
        return <Note {...note} key={note._id} />;
      })}
    </div>
  );
};

export default AllNotesList;
