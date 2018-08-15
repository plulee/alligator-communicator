import { combineReducers } from "redux";
import messages from "./messages";
import rooms from "./rooms";
import users from "./users";
import options from "./options";


const rootReducer = combineReducers({
    messages,
    rooms,
    users,
    options
});

export default rootReducer;
