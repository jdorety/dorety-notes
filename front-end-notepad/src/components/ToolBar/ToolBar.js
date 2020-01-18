import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddNoteButton from "./buttons/AddNoteButton";
import HomeButton from "./buttons/HomeButton";

import "../../styles/ToolBar.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const TopBar = props => {
  const classes = useStyles();

  return (
    // <header className="toolbar">
    //   <nav>
    //     <h1 id="nav-logo">Dorety Notes</h1>
    //     <div className="button-container">
    //       <AddNoteButton history={props.history} />
    //       <HomeButton history={props.history} />
    //     </div>
    //   </nav>
    // </header>
    <AppBar position="sticky">
      <ToolBar>
        <Typography variant="h3" className={classes.title}>
          Dorety Notes
        </Typography>
        <AddNoteButton />
        <HomeButton />
      </ToolBar>
    </AppBar>
  );
};

ToolBar.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default TopBar;
