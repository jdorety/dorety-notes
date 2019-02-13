import React, { Component } from "react";
import axios from "axios";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      noteID: props.match.params.id
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.state.noteID}`)
      .then(response => this.setState({ note: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="main-view">
        <div className="modify">
          <a href="#">edit</a>
          <a href="#">delete</a>
        </div>
        <h2 className="section-header">{this.state.note.title}</h2>
        <p>{this.state.note.textBody}</p>
      </div>
    );
  }
}

export default ViewNote;
