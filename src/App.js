import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asd2",
        },
        {
          name: "Dracula",
          id: "asd1",
        },
        {
          name: "Zombie",
          id: "asd3",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
