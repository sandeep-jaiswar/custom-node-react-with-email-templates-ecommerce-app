import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import routes from "./client/routes/routes";
import "./client/styles/index.scss";
import "./font/Gilroy/styles.css";
import "./font/HelveticaNeue/styles.css";
import store from "./store/createStore";

ReactDOM.hydrate(
  <Provider store={store()}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
