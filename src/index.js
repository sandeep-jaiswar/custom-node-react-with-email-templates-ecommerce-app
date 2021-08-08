import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./client/styles/index.scss";
import store from './store/createStore';
import {renderRoutes} from 'react-router-config';
import routes from './client/routes/routes';
import Header from "./client/common/Header";

ReactDOM.hydrate(
  <Provider store={store()}>
    <BrowserRouter>
    <Header/>
    {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
