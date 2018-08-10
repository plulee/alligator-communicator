import { ADD_ROOM } from "../constants/action-types";
const initialState = {
    rooms: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROOM:
            return { ...state, articles: [...state.rooms, action.payload] };
        default:
            return state;
    }
};
export default rootReducer;
