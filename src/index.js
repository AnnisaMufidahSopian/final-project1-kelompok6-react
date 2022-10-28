import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
