import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      title: "",
    };

    /* bind this to this context, now this == component */
    // this.handleChange = this.handleChange.bind(this);
    /* OR we use arrow function, because arrow function has no its own this */
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value });
    /* automatically set this where it defined in the first place
       and the context is App, now it is lexical scoping
       Auto bind to */
  };

  render() {
    const { monsters, searchField, title } = this.state;
    // const filteredMonsters = monsters.filter((monster) =>
    //   monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    // );
    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
