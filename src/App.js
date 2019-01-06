import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Leaderboard from "./components/leaderboard";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Leaderboard />
      </React.Fragment>
    );
  }
}

export default App;
