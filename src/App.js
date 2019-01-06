import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Leaderboard from "./components/leaderboard";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return <Leaderboard />;
  }
}

export default App;
