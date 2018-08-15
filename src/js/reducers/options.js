import * as types from "../constants/ActionTypes";

const initialState = {
    chosenRoomId: 0,
    chosenUsername: "Me"
};

const options = (state = {...initialState}, action) => {
    switch (action.type) {
    case types.CHOOSE_ROOM:
        return {
            ...state,
            chosenRoomId: action.id
        };
    case types.CHOOSE_USERNAME:
        return {
            ...state,
            chosenUsername: action.username
        };

        /*maybe Object.assign({}, state, {chosenRoomId: action.id}) */
    default:
        return state;
    }
};

export default options;
