import React, { Component } from "react";
import "./App.css";

import RepoViews from "./views/RepoViews";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RepoViews />
        </header>
      </div>
    );
  }
}

export default App;
