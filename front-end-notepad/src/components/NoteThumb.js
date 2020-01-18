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
  }
}));

const NoteThumb = props => {
  const classes = useStyles();
  // const dispStr =
  //   props.textBody.length > 55
  //     ? props.textBody.slice(0, 54) + "..."
  //     : props.textBody;

  // const dispTitle =
  //   props.title.length > 35 ? props.title.slice(0, 34) + "..." : props.title;

  function clickHandler() {
    props.history.push(`/notes/${props._id}`);
  }
  return (
    <Typography component="div">
    <Paper className={classes.paper} onClick={clickHandler}>
          <Box
            textAlign="left"
            fontWeight={800}
            fontSize={20}
            m={1}
            component="div"
          >
            {props.title}
          </Box>
          <Box
            className={classes.paper}
            component="div"
            textAlign="left"
            fontSize={14}
            m={0.5}
          >
            {props.textBody}
          </Box>
    </Paper>
      </Typography>
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
