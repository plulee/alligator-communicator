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

const socket = setupSocket(store.dispatch);

sagaMiddleware.run(handleNewMessage, { socket });

export default store;
