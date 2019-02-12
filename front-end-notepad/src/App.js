import React, { Component } from "react";
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

  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>
      </div>
    );
  }
}

export default App;
