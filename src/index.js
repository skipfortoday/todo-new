import React from "react";
import ReactDOM from "react-dom";
import "dayjs/locale/id.js";

import configureStore from "./redux";
import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
