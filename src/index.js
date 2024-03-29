import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './i18n';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./storeByRedux/store/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

