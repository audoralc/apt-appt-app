import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DaysDash from "./DaysDash";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <h1> Apt ⏲ </h1>
          <h2> an appointment app</h2>
        </header>

        <DaysDash />
      </div>
    );
  }
}

export default App;
