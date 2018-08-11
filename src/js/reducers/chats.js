import * as types from '../constants/ActionTypes'

const chats = (state = { chosenRoomId: 0 }, action) => {
    switch (action.type) {
        case types.CHOOSE_ROOM:
            return {
                ...state,
                chosenRoomId: action.id
            };
        default:
            return state;
    }
};

export default chats;
