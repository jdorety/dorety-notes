import React, { Component } from "react";
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

  render() {
    return (
      <div className="main-view">
        <h2 className="section-header">Create New Note</h2>
        <form className="add-note-form">
          <input
            className="title-input"
            type="text"
            value={this.state.title}
            name="title"
            placeholder="Note Title"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            value={this.state.textBody}
            name="textBody"
            placeholder="Note Content"
            onChange={this.changeHandler}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default AddNoteForm;
