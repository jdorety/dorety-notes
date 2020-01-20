import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import "../styles/NoteThumb.css";

const useStyles = makeStyles(theme => ({
  paper: {
    height: 200,
    width: 200,
    overflow: "hidden",
    textOverflow: "ellipses"
  },
  noteContents: {
    width: 180,
    textOverflow: "ellipses",
    textAlign: "left",
    fontSize: 14,
    margin: "5%"
  }
}));

const NoteThumb = props => {
  const classes = useStyles();

  function clickHandler() {
    props.history.push(`/notes/${props._id}`);
  }
  return (
    <Paper elevation={3} className={classes.paper} onClick={clickHandler}>
      <Typography component="div">
        <Box
          textAlign="left"
          fontWeight={800}
          fontSize={20}
          m={1}
          component="div"
        >
          {props.title}
        </Box>
        <Box className={classes.noteContents} component="div">
          {props.textBody}
        </Box>
      </Typography>
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
