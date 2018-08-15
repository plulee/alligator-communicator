import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/index";
import handleNewMessage from "../sagas";
import setupSocket from "../socket";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

let username = "test";
const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

export default store;
