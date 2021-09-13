import { matchRoutes } from "react-router-config";

export const loadRouteData = (options) => {
  const { location, routes, loadType, pathname } = options;
  let path = pathname || location.pathname;
  const matchedRoutes = matchRoutes(routes, path);

  if (!matchedRoutes.length && loadType !== "assets") {
    if (typeof window !== "undefined") {
      if (path.match(/\/{2,}$/)) {
        path = path.replace(/\/*$/, "/");
        return (window.location.href = path);
      }
      return window.location.reload();
    } else {
      return Promise.resolve({
        notFoundPage: true
      });
    }
  }

  const matchedRoute = matchedRoutes[0].route;
  const routeParams = matchedRoutes[0].match.params;
  const promises = matchedRoutes
    .map(async ({ route }) => {
      let promiseArr = [];
      let loadData, clientData, component, registerReducer;
      if (route.isLazy) {
        const data = await route.component.load();
        ({ loadData, clientData, registerReducer, default: component } = data);
      } else {
        ({ loadData, clientData, component, registerReducer } = route);
      }
      if (!loadType || loadType === "clientData") {
        promiseArr.push(
          clientData
            ? clientData({ routeParams, matchedRoute, ...options })
            : null
        );
      }
      if (!loadType || loadType === "loadData") {
        promiseArr.push(
          loadData ? loadData({ routeParams, matchedRoute, ...options }) : null
        );
      }
      if (loadType === "registerReducer") {
        promiseArr.push(
          registerReducer
            ? registerReducer({ routeParams, matchedRoute, ...options })
            : null
        );
      } else if (component.load) {
        promiseArr.push(component.load());
      }
      return Promise.all(promiseArr);
    })
    .map((promise) => {
      if (!promise) {
        return null;
      }
      return new Promise((resolve) => {
        const resolveCb = (data) => {
          resolve({
            ...data,
            routeData: matchedRoute
          });
        };
        promise.then(resolveCb).catch(resolveCb);
      });
    });
  return Promise.all(promises);
};

export const isUrlDifferent = (
  location1,
  location2,
  keysToCompare = [],
  compareAllKeys
) => {
  const isDifferent =
    trimSlash(location1.pathname) !== trimSlash(location2.pathname);
  return (
    isDifferent ||
    compareSearch(
      location1.search,
      location2.search,
      keysToCompare,
      compareAllKeys
    )
  );
};

const compareSearch = (search1, search2, keysToCompare, compareAllKeys) => {
  if (search1 === "" && search2 !== "") {
    return true;
  }
  search1 = formatSearch(search1);
  search2 = formatSearch(search2);
  if (compareAllKeys) {
    keysToCompare = Object.keys({
      ...search1,
      ...search2
    });
  }
  for (var i = 0; i < keysToCompare.length; i++) {
    if (search1[keysToCompare[i]] !== search2[keysToCompare[i]]) {
      return true;
    }
  }
  return false;
};

const formatSearch = (search = "") => {
  const arr = search.toLowerCase().replace("?", "").split("&");
  let searchObj = {};
  arr.forEach((curArr) => {
    const splitArr = curArr.split("=");
    searchObj[splitArr[0]] = splitArr[1];
  });
  return searchObj;
};

const trimSlash = (url = "") => {
  if (url !== "/" && url.slice(-1) === "/") {
    return url.slice(0, url.length - 1);
  }
  return url;
};
