import { useEffect, useState, useRef, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { useStore } from "react-redux";
import { loadRouteData, isUrlDifferent } from "./utils";

export default (props) => {
  const {
    routes,
    searchKeyArr = [],
    compareAllKeys = false,
    locationEventHandler = () => {},
    render = () => {},
    children
  } = props;

  const history = useHistory();
  const location = useLocation();

  const hasClientData = useMemo(() => {
    const matchedRoutes = matchRoutes(routes, location.pathname);
    for (let i = 0; i < matchedRoutes.length; i++) {
      if (matchedRoutes[i].route.clientData) {
        return true;
      }
    }
    return false;
  }, []);

  const [state, setState] = useState(() => {
    const matchedRoutes = matchRoutes(routes, location.pathname);
    const noLoader = matchedRoutes[0] && matchedRoutes[0].route.noLoader;
    return {
      previousLocation: null,
      location: location,
      showRoute: noLoader || !hasClientData,
      showLoader: !noLoader && hasClientData
    };
  });

  const store = useStore();
  const prevLocation = useRef(location);
  const scrollPosition = useRef({});

  useEffect(() => {
    loadRouteData({
      location,
      routes,
      store,
      loadType: "registerReducer"
    }).then(() => {
      if (hasClientData) {
        loadRouteData({
          location,
          loadType: "clientData",
          routes,
          store
        }).then(() => {
          setState((prevState) => {
            // Object.assign would also work
            return {
              ...prevState,
              showRoute: true,
              showLoader: false
            };
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    const previousLocation = prevLocation.current;
    const navigated = isUrlDifferent(
      previousLocation,
      location,
      searchKeyArr,
      compareAllKeys
    );

    if (navigated) {
      // save the location so we can render the old screen
      const matchedRoutes = matchRoutes(routes, location.pathname);
      const prevPathName = previousLocation.pathname;
      scrollPosition.current[prevPathName] = window.scrollY;
      locationEventHandler({
        type: "PAGE_CHANGE_START",
        matchedRoutes
      });
      const noLoader = matchedRoutes[0] && matchedRoutes[0].route.noLoader;
      setState((prevState) => {
        // Object.assign would also work
        return {
          ...prevState,
          previousLocation,
          location,
          showLoader: !noLoader
        };
      });
      loadRouteData({
        location,
        routes,
        store,
        loadType: "registerReducer"
      }).then(() => {
        loadRouteData({
          location,
          routes,
          store
        }).then((data) => {
          locationEventHandler({
            type: "PAGE_CHANGE_COMPLETE",
            matchedRoutes,
            data: data
          });
          window.scrollTo(0, 0);
          const pathName = location.pathname;
          setState((prevState) => {
            // Object.assign would also work
            return {
              ...prevState,
              previousLocation: null,
              showLoader: false
            };
          });
          if (history.action == "POP" && scrollPosition.current[pathName]) {
            setTimeout(() => {
              window.scrollTo(0, scrollPosition.current[pathName] || 0);
            }, 100);
          }
        });
      });
    }
    prevLocation.current = location;
  }, [location]);

  return render({
    routes,
    children,
    ...state
  });
};
