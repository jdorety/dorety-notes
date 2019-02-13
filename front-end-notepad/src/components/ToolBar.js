import React from "react";
import AddNoteButton from "./AddNoteButton";
import HomeButton from "./HomeButton";

import "../styles/ToolBar.css";

const ToolBar = props => {
  return (
    <nav className="toolbar">
      <h1 id="nav-logo">Lambda Notes</h1>
      <div className="button-container">
        <AddNoteButton history={props.history} />
        <HomeButton history={props.history} />
      </div>
    </nav>
  );
};

export default ToolBar;
