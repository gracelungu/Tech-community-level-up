import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import Routes from "./components/Routes";

const routing = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
