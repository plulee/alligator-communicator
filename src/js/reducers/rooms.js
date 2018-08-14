import * as types from '../constants/ActionTypes'

const rooms = (state = [                {
                    roomName: 'initial',
                    id: 0,
                }], action) => {
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
