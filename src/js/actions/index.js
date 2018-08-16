import * as types from "../constants/ActionTypes";

let nextMessageId = 0;
let nextRoomId = 1;

export const addRoom = roomName => ({
    type: types.ADD_ROOM,
    id: nextRoomId++,
    roomName
});

export const addMessage = (message, author, chatRoom) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author,
    chatRoom,
    received: false
});

export const chooseRoom = id => ({
    type: types.CHOOSE_ROOM,
    id
});

export const chooseUsername = username => ({
    type: types.CHOOSE_USERNAME,
    username
});

export const messageReceived = (message, author, chatRoom) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author,
    chatRoom,
    received: true
});
