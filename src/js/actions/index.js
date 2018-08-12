import * as types from '../constants/ActionTypes'

let nextMessageId = 0;
let nextUserId = 0;
let nextRoomId = 0;

export const chooseRoom = id => ({
    type: types.CHOOSE_ROOM,
    id
});


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
  chatRoom
});

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

export const messageReceived = (message, author, chatRoom) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
  chatRoom
});


export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})
