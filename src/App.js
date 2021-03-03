import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super(); // should be used befor this..
    this.state = {
      robots: robots,
      searchValue: "",
    };
  }
  // always try to use arrow fuctions inside the class
  // here if we use normal syntax for function the event parameter would not be comming
  // from the App class instaed it would be if SearchBox Component
  //onSearchChange (event) {
  onSearchChange = (event) => {
    //console.log(event.target.value);
    // to change the state always use this.setState function ...
    this.setState({
      searchValue: event.target.value,
    });

    //console.log(filteredRobots);
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
