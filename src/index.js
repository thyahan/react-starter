import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";
import createStore from "./reduxStore";
// import App from "./App";
import Router from "./router";

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
