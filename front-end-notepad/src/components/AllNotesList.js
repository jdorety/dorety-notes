import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getList } from "../actions";

import NoteThumb from "./NoteThumb";

import "../styles/AllNotesList.css";

class AllNotesList extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div className="main-view">
        <h2 className="section-header">Your Notes:</h2>
        {this.props.addingNote && <h3>Adding Note</h3>}
        <div className="list-wrapper">
          {this.props.notes.map(note => {
            return <NoteThumb {...note} key={note._id} {...this.props} />;
          })}
        </div>
      </div>
    );
  }
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

export default connect(
  mst3k,
  { getList }
)(AllNotesList);
