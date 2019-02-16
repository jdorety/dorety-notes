import React from "react";
import { Route } from "react-router-dom";
// import axios from "axios";

import AllNotesList from "./components/AllNotesList";
import ToolBar from "./components/ToolBar";
import AddNoteForm from "./components/AddNoteForm";
import ViewNote from "./components/ViewNote";
import EditForm from "./components/EditForm";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={ToolBar} />
      <Route path="/" exact component={AllNotesList} />
      <Route path="/notes/:id" exact component={ViewNote} />
      <Route path="/addnote" exact component={AddNoteForm} />
      <Route path="/notes/:id/edit" exact component={EditForm} />
    </div>
  );
};

export default App;
