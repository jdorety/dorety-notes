import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { getList } from "../actions";

import NoteThumb from "./NoteThumb";

import "../styles/AllNotesList.css";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justify: "flex-start",
    spacing: 3
  },
  notes: {
    padding: theme.spacing(1),
  }
}));

function AllNotesList(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getList();
  });

  return (
    <Grid container justify="center" className={classes.root}>
      {props.notes.map(note => {
        return (
          <Grid className={classes.notes} xs item>
            <NoteThumb {...note} key={note._id} {...props} />
          </Grid>
        );
      })}
    </Grid>
  );
}

const mst3k = state => {
  return {
    notes: state.list.notes,
    addingNote: state.add.addingNewNote
  };
};

AllNotesList.propTypes = {
  getList: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  notes: PropTypes.array
};

export default connect(mst3k, { getList })(AllNotesList);
