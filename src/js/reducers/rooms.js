import * as types from "../constants/ActionTypes";

const initialState = {
    roomName: "General Discussion",
    id: 0,
};

const rooms = (state = [{...initialState}], action) => {
    switch (action.type) {
    case types.ADD_ROOM:
        return state.concat([
            {
                roomName: action.roomName,
                id: action.id,
            }
        ]);
    default:
        return state;
    }
};

export default rooms;
