import React, { Component } from "react";
import axios from "axios";

import DeleteModal from "./DeleteModal";

import "../styles/ViewNote.css";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      noteID: props.match.params.id,
      showDelete: false,
      loading: true
    };
  }

  getNote = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.state.noteID}`)
      .then(response => this.setState({ note: response.data, loading: false }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getNote();
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

          {this.state.loading && <h2>Loading</h2>}

          <div className="header-wrapper">
            <div className="modify">
              <button className="edit-buttons" onClick={this.editHandler}>
                edit
              </button>
              <button className="edit-buttons" onClick={this.toggleDelete}>
                delete
              </button>
            </div>
            <h2 className="note-title">{this.state.note.title}</h2>
          </div>
          <p className="note-body">{this.state.note.textBody}</p>
        </div>
      </div>
    );
  }
}

export default ViewNote;
