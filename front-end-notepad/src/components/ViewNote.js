import React, { Component } from "react";
import axios from "axios";

import DeleteModal from "./DeleteModal";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      noteID: props.match.params.id,
      showDelete: false
    };
  }

  getNote = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.state.noteID}`)
      .then(response => this.setState({ note: response.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getNote();
  }

  componentDidUpdate() {
    this.getNote();
  }

  toggleDelete = () => {
    this.setState({
      showDelete: !this.state.showDelete
    });
  };

  editHandler = () => {
    this.props.history.push(`/notes/${this.state.noteID}/edit`);
  };

  render() {
    if (!this.state.showDelete) {
      return (
        <div className="main-view">
          <div className="modify">
            <button className="edit-buttons" onClick={this.editHandler}>
              edit
            </button>
            <button className="edit-buttons" onClick={this.toggleDelete}>
              delete
            </button>
          </div>
          <h2 className="section-header">{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
        </div>
      );
    } else
      return (
        <DeleteModal
          id={this.state.noteID}
          history={this.props.history}
          toggle={this.toggleDelete}
        />
      );
  }
}

export default ViewNote;
