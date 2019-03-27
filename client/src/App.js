import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./components/hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit Testing this out<code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
