import { ADD_ROOM } from "../constants/action-types";

export const addRoom = room => ({
    type: ADD_ROOM, payload: room
});
