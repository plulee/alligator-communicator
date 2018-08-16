import * as types from "../constants/ActionTypes";
import { messageReceived } from "../actions";

const setupSocket = (dispatch) => {
    const socket = new WebSocket("ws://localhost:8989");

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
        case types.ADD_MESSAGE:
            dispatch(messageReceived(data.message, data.author, data.chatRoom));
            break;
        default:
            break;
        }
    };

    return socket;
};

export default setupSocket;
