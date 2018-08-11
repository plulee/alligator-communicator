import { combineReducers } from "redux"
import messages from "./messages"
import rooms from "./rooms"
import users from "./users"
import chats from "./chats"


const rootReducer = combineReducers({
    messages,
    rooms,
    users,
    chats
});

export default rootReducer;
