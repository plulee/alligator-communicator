import * as types from '../constants/ActionTypes'
const initialState = {
    rooms: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ROOM:
            return { ...state, rooms: [...state.rooms, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;
