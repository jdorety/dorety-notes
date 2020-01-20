import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: theme.spacing(90),
      height: theme.spacing(90)
    }
  },
  title: {
    fontSize: 24
  },
  content: {
    fontSize: 18
  }
}));

const Note = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        {props.children}
        <Typography className={classes.title}>
          <h3>{props.title}</h3>
        </Typography>
        <Typography className={classes.content}>
          <p>{props.textBody}</p>
        </Typography>
      </Paper>
    </div>
  );
};

export default Note;
