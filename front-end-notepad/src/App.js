import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import AllNotesList from "./components/AllNotesList";
import ToolBar from "./components/ToolBar";
import AddNoteForm from "./components/AddNoteForm";
import ViewNote from "./components/ViewNote";
import EditForm from "./components/EditForm";

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
        <Route path="/notes/:id" exact component={ViewNote} />
        <Route path="/addnote" exact component={AddNoteForm} />
        <Route path="/notes/:id/edit" exact component={EditForm} />
      </div>
    );
  }
}

export default App;
