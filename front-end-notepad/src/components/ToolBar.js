import React from "react";
import PropTypes from "prop-types";
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

ToolBar.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default ToolBar;
