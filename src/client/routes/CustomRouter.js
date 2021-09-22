import React, { Component } from "react";
import { Route } from "react-router-dom";
import Loader from "../common/Loader";
import Routes from "./routes";
import RouteLoader from "./RoutesLoader.js";

export default class PendingNavDataLoader extends Component {
  renderFn = (options) => {
    const {
      children,
      location,
      previousLocation,
      showRoute,
      showLoader
    } = options;
    console.log(options,'options');
    return (
      <>
        {showRoute && (
          <Route
            location={previousLocation || location}
            render={() => children}
          />
        )}
        {showLoader ? <Loader /> : null}
      </>
    );
  };
  render() {
    return (
      <RouteLoader routes={Routes} render={this.renderFn}>
        {this.props.children}
      </RouteLoader>
    );
  }
}
