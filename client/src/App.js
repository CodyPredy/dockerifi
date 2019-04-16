import React, { Component } from "react";

import Repo from "./views/Repo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Repo />
        </header>
      </div>
    );
  }
}

export default App;
