import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
