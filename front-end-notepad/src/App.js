import React from "react";
import { Route } from "react-router-dom";
// import axios from "axios";

import AllNotesList from "./components/AllNotesList";
import ToolBar from "./components/ToolBar/ToolBar";
import AddNoteForm from "./components/Forms/AddNoteForm";
import ViewNote from "./components/ViewNote/ViewNote";
import EditForm from "./components/Forms/EditForm";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={ToolBar} />
      <div className="app-body">
        <Route path="/" exact component={AllNotesList} />
        <Route path="/notes/:id" exact component={ViewNote} />
        <Route path="/addnote" exact component={AddNoteForm} />
        <Route path="/notes/:id/edit" exact component={EditForm} />
      </div>
    </div>
  );
};

export default App;
