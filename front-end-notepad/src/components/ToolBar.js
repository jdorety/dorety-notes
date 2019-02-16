import React from "react";
import AddNoteButton from "./AddNoteButton";
import HomeButton from "./HomeButton";

import "../styles/ToolBar.css";

const ToolBar = props => {
  return (
    <header className="toolbar">
      <nav>
        <h1 id="nav-logo">Lambda Notes</h1>
        <AddNoteButton history={props.history} />
        <HomeButton history={props.history} />
      </nav>
    </header>
  );
};

export default ToolBar;
