import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const AddNoteButton = props => {
  const classes = useStyles();

  //Pushing button routes to add note page
  function clickHandler(e) {
    props.history.push("/addnote");
  }
  return (
    <div className={classes.root}>
      <Button
        className="tool"
        startIcon={<Icon>add</Icon>}
        variant="contained"
        onClick={clickHandler}
      >
        Add Note
      </Button>
    </div>
  );
};

AddNoteButton.propTypes = {
  history: PropTypes.object
};

export default AddNoteButton;
