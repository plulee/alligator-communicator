import * as types from '../constants/ActionTypes'

let nextMessageId = 0;
let nextUserId = 0;

export const addRoom = room => ({
    type: types.ADD_ROOM,
    payload: room
});

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})
