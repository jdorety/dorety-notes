import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote, getList } from "../actions";
import "../styles/AddNoteForm.css";

class AddNoteForm extends Component {
  constructor() {
    super();
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
    this.props.addNote(this.state);
    this.props.history.push("/");
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

export default connect(
  null,
  { addNote, getList }
)(AddNoteForm);
