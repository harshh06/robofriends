import React, { Component } from "react";
import CardList from "../components/CardList";
//import { robots } from "./robots";
import SearchBox from "../components/SearchBox";
import "../App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  //smart component => have class
  constructor() {
    super(); // should be used befor this..
    this.state = {
      robots: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
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
    if (this.state.robots.length == 0) {
      return <h1 className="tc"> Loading </h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
