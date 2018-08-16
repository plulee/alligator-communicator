import { combineReducers } from "redux";
import messages from "./messages";
import options from "./options";
import rooms from "./rooms";


const rootReducer = combineReducers({
    messages,
    rooms,
    options
});

export default rootReducer;
