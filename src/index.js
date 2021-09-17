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
import CustomRouter from "./client/routes/CustomRouter";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./client/common/Image/LazyLoadImage";

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('app');
if (isMobile) {
  window.isMobile = true;
} else {
  window.isMobile = false;
}

ReactDOM.hydrate(
  <Provider store={store()}>
    <BrowserRouter>
      <CustomRouter>{renderRoutes(routes)}</CustomRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
