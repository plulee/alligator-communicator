import React, { Component } from 'react';
import PropTypes from "prop-types";

/* Main component communicator */
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
            <div className="communicator">
                <h1><span className="app-name">Alligator</span> Communicator</h1>
                <button>+ Add room</button>
            </div>
        );
    }
}

/* Typechecking with PropTypes */
Communicator.propTypes = {
    tags: PropTypes.string,
};

export default App;
