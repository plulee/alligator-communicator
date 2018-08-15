import * as types from "../constants/ActionTypes";

const users = (state = [], action) => {
    switch (action.type) {
    case types.ADD_USER:
        return state.concat([
            {
                name: action.name,
                id: action.id,
                chatRoom: action.chatRoom,
            }
        ]);
    default:
        return state;
    }
};

export default users;
