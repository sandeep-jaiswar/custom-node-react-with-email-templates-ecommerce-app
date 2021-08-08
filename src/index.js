import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./client/styles/index.scss";
import store from "./store/createStore";
import { renderRoutes } from "react-router-config";
import routes from "./client/routes/routes";
import Header from "./client/common/Header";
import "./font/HelveticaNeue/styles.css";
import "./font/Gilroy/styles.css";
import Footer from "./client/common/Footer";

ReactDOM.hydrate(
  <Provider store={store()}>
    <BrowserRouter>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
