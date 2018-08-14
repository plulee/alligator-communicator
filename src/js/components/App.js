import React, { Component } from "react";
import { Chat } from "../containers/Chat";
import { AddRoom } from "../containers/AddRoom";
import { RoomsList } from "../containers/RoomsList";
import { AddMessage } from "../containers/AddMessage";

class App extends Component {
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

export default App;
