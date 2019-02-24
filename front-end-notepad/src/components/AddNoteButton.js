import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Add } from "../icons/plus.svg";

const AddNoteButton = props => {
  //Pushing button routes to add note page
  function clickHandler(e) {
    props.history.push("/addnote");
  }
  return (
    <button className="tool" onClick={clickHandler}>
      <span className="desk-tool">Add Note +</span>
      <Add className="mobile-tool" />
    </button>
  );
};

AddNoteButton.propTypes = {
  history: PropTypes.object
};

export default AddNoteButton;
