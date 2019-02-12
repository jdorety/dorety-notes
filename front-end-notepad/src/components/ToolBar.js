import React from "react";
import AddNoteButton from "./AddNoteButton";

import "../styles/ToolBar.css";

const ToolBar = props => {
  return (
    <nav className="toolbar">
      <h1 id="nav-logo">Lambda Notes</h1>

      <AddNoteButton history={props.history} />
      <button>PlaceHolder</button>
    </nav>
  );
};

export default ToolBar;
