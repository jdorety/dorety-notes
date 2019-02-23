import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNote, getList } from "../actions";
import "../styles/AddNoteForm.css";

class AddNoteForm extends Component {
  constructor() {
    super();
    //where input form content is saved
    this.state = {
      title: "",
      textBody: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    //calls addNote action creator, passes state and history prop
    this.props.addNote(this.state, this.props.history);
    //refreshes main page to include added note
    this.props.getList();
  };

  render() {
    return (
      <div className="main-view">
        <h2 className="section-header">Create New Note</h2>
        <form className="note-form" onSubmit={this.submitHandler}>
          <input
            className="add title-input"
            type="text"
            value={this.state.title}
            name="title"
            placeholder="Note Title"
            onChange={this.changeHandler}
          />
          <textarea
            className="add text-input"
            rows="20"
            type="text"
            value={this.state.textBody}
            name="textBody"
            placeholder="Note Content"
            onChange={this.changeHandler}
          />
          <button className="submit-note" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

AddNoteForm.propTypes = {
  addNote: PropTypes.func,
  getList: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default connect(
  null,
  { addNote, getList }
)(AddNoteForm);
