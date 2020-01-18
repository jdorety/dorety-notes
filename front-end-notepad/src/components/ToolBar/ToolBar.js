import React from "react";
import PropTypes from "prop-types";
import AddNoteButton from "./buttons/AddNoteButton";
import HomeButton from "./buttons/HomeButton";

import "../../styles/ToolBar.css";

const ToolBar = props => {
  return (
    <header className="toolbar">
      <nav>
        <h1 id="nav-logo">Dorety Notes</h1>
        <div className="button-container">
          <AddNoteButton history={props.history} />
          <HomeButton history={props.history} />
        </div>
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
