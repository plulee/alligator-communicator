import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/index";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import "../scss/main.scss";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
