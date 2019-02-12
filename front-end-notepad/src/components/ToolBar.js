import React from "react";
import AddNoteButton from "./AddNoteButton";
import HomeButton from "./HomeButton";

import "../styles/ToolBar.css";

const ToolBar = props => {
  return (
    <nav className="toolbar">
      <h1 id="nav-logo">Lambda Notes</h1>

      <AddNoteButton history={props.history} />
      <HomeButton history={props.history} />
    </nav>
  );
};

export default ToolBar;
