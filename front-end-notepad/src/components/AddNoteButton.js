import React from "react";

const AddNoteButton = props => {
  function clickHandler(e) {
    props.history.push("/addnote");
  }

  return (
    <button className="tool" onClick={clickHandler}>
      + Create Note
    </button>
  );
};

export default AddNoteButton;
