import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots } from "../components/robots";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";


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
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;