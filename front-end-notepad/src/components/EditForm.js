import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      __v: null,
      _id: null,
      textBody: "",
      title: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(response => this.setState({ ...response.data }))
      .catch(err => console.log(err));
    console.log(this.state);
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        this.state
      )
      .then(response => console.log(response))
      .catch(err => console.log(err));
    this.props.history.push(`/notes/${this.state._id}`);
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

export default EditForm;
