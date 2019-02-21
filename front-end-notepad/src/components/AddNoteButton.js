import React from "react";
import PropTypes from "prop-types";

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

AddNoteButton.propTypes = {
  history: PropTypes.object
};

export default AddNoteButton;
