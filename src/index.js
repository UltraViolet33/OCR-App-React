import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import MainReducer from "./reducers";
import { Provider } from "react-redux";
const store = createStore(MainReducer);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
