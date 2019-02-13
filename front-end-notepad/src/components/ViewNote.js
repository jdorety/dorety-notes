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

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.state.noteID}`)
      .then(response => this.setState({ note: response.data }))
      .catch(err => console.log(err));
  }

  toggleDelete = () => {
    this.setState({
      showDelete: !this.state.showDelete
    });
  };

  render() {
    if (!this.state.showDelete) {
      return (
        <div className="main-view">
          <div className="modify">
            <a href="#">edit</a>
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
