import React, { Component } from "react";
import { Route } from "react-router-dom";

import AllNotesList from "./components/AllNotesList";
import ToolBar from "./components/ToolBar";
import AddNoteForm from "./components/AddNoteForm";
import ViewNote from "./components/ViewNote";

import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  getData = URL => {
    axios
      .get(URL)
      .then(response =>
        this.setState({
          notes: response.data
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getData(`https://fe-notes.herokuapp.com/note/get/all`);
  }

  componentDidUpdate() {
    this.getData(`https://fe-notes.herokuapp.com/note/get/all`);
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={ToolBar} />
        <Route
          path="/"
          exact
          render={props => <AllNotesList notes={this.state.notes} {...props} />}
        />
        <Route
          path="/notes/:id"
          exact
          render={props => <ViewNote {...props} notes={this.state.notes} />}
        />
        <Route
          path="/addnote"
          exact
          render={props => <AddNoteForm {...props} refresh={this.getData} />}
        />
      </div>
    );
  }
}

export default App;
