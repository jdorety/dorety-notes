import React, { Component } from "react";
import axios from "axios";
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

  addNote = (URL, note) => {
    axios
      .post(URL, note)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  submitHandler = e => {
    e.preventDefault();
    this.addNote(`https://fe-notes.herokuapp.com/note/create`, this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="main-view">
        <h2 className="section-header">Create New Note</h2>
        <form className="add-note-form" onSubmit={this.submitHandler}>
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

export default AddNoteForm;
