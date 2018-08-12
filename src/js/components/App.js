import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chat } from "../containers/Chat";
import { AddRoom } from "../containers/AddRoom";
import { RoomsList } from "../containers/RoomsList";
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
                <header>
                    <div className="header-container">
                        <div><span className="app-name">Alligator</span> Communicator</div>
                        <AddRoom />
                    </div>
                </header>
                <main>
                    <RoomsList />
                    <Chat />
                    <AddMessage />
                </main>
            </div>
        );
    }
}

/* Typechecking with PropTypes */
App.propTypes = {
    rooms: PropTypes.string,
};

export default App;
