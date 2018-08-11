import { combineReducers } from "redux"
import messages from "./messages"
import rooms from "./users"
import users from "./users"


const rootReducer = combineReducers({
    messages,
    rooms,
    users
});

export default rootReducer;
