import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm:  "",
            robots: []
        }
    }
    onSearchChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users});
        })
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchTerm);
        });
        return (
            <div className="tc">
                <h1 className="f1" >Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots} />
            </div>
        );
    }
}

export default App;