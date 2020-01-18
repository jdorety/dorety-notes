import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import "../styles/NoteThumb.css";

const useStyles = makeStyles(theme => ({
  paper: {
    height: 200,
    width: 200
  }
}))

const NoteThumb = props => {
  const classes= useStyles();
  // const dispStr =
  //   props.textBody.length > 55
  //     ? props.textBody.slice(0, 54) + "..."
  //     : props.textBody;

  // const dispTitle =
  //   props.title.length > 35 ? props.title.slice(0, 34) + "..." : props.title;

  function clickHandler(e) {
    props.history.push(`/notes/${props._id}`);
  }
  return (
    <Paper className={classes.paper} onClick={clickHandler}>
      <div className="note-header-wrapper">
        <h3 className="note-header">{props.title}</h3>
      </div>
      <div className="thumb-contents">
        <p>{props.textBody}</p>
      </div>
    </Paper>
  );
};

NoteThumb.propTypes = {
  getList: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  notes: PropTypes.array,
  tags: PropTypes.array,
  textBody: PropTypes.string,
  title: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string
};

export default NoteThumb;
