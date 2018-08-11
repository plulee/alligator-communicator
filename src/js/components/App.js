import React, { Component } from "react";
import PropTypes from "prop-types";
import { Room } from "../containers/Room"
import { AddMessage } from "../containers/AddMessage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: "",
            users: "",
        };
    }

    render() {
        return (
            <div className="container">
                <h1><span className="app-name">Alligator</span> Communicator</h1>
                <button>+ Add room</button>
                <Room />
                <AddMessage />
            </div>
        );
    }
}

/* Typechecking with PropTypes */
App.propTypes = {
    rooms: PropTypes.string,
};

export default App;
