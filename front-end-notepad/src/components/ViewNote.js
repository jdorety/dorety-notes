import React, { Component } from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getNote } from "../actions";

import DeleteModal from "./DeleteModal";

import "../styles/ViewNote.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteID: props.match.params.id,
      showDelete: false
    };
  }

  classes = useStyles();

  // getNote = () => {
  //   axios
  //     .get(`https://fe-notes.herokuapp.com/note/get/${this.state.noteID}`)
  //     .then(response => this.setState({ note: response.data, loading: false }))
  //     .catch(err => console.log(err));
  // };

  componentDidMount() {
    this.props.getNote(this.state.noteID);
  }

  // componentDidUpdate() {
  //   this.getNote();
  // }

  toggleDelete = () => {
    this.setState({
      showDelete: !this.state.showDelete
    });
  };

  editHandler = () => {
    this.props.history.push(`/notes/${this.state.noteID}/edit`);
  };

  render() {
    this.classes();

    return (
      <div className="main-view">
        <div className="note-wrapper">
          {this.state.showDelete && (
            <DeleteModal
              id={this.state.noteID}
              history={this.props.history}
              toggle={this.toggleDelete}
            />
          )}
          {this.props.error && <h2>{this.props.error}</h2>}
          {this.props.loading && <h2>Loading</h2>}

          <div className="header-wrapper">
            <div className={this.classes.root}>
              <Fab  onClick={this.editHandler}>
                edit
              </Fab>
              <button className="edit-buttons" onClick={this.toggleDelete}>
                delete
              </button>
            </div>
            <h2 className="note-title">{this.props.note.title}</h2>
          </div>
          <p className="note-body">{this.props.note.textBody}</p>
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return {
    note: state.note.noteDisplayed,
    loading: state.note.loadingNote,
    error: state.note.noteError
  };
};

ViewNote.propTypes = {
  error: PropTypes.string,
  getNote: PropTypes.func,
  history: PropTypes.object,
  loading: PropTypes.bool,
  match: PropTypes.object,
  note: PropTypes.object
};

export default connect(mstp, { getNote })(ViewNote);
