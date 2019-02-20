import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { getNote, editNote } from "../actions";

import "../styles/EditForm.css";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      __v: null,
      _id: null,
      textBody: "...",
      title: "..."
    };
  }

  componentDidMount() {
    // axios
    //   .get(
    //     `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
    //   )
    //   .then(response => this.setState({ ...response.data }))
    //   .catch(err => console.log(err));
    // console.log(this.state);
    this.props.getNote(this.props.match.params.id);
    this.setState({ ...this.props.note });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.editNote(this.state._id, this.state, this.props.history);
  };

  render() {
    return (
      <div className="main-view">
        <h2 className="section-header">Edit Note:</h2>
        <form className="note-form" onSubmit={this.submitHandler}>
          <input
            className="edit title-input"
            type="text"
            value={this.state.title}
            name="title"
            placeholder="Note Title"
            onChange={this.changeHandler}
          />
          <textarea
            className="edit text-input"
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

const mstp = state => {
  return {
    note: { ...state.noteDisplayed }
  };
};

export default connect(
  mstp,
  { getNote, editNote }
)(EditForm);
