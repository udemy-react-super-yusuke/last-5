import React from "react";
import { render } from "react-dom";

import App from "./App";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer);

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 仮に実行する
import giphyAPI from "./APIs/giphyAPI";

giphyAPI("cat").then(res => {
  console.log(res.data);
});
