import { combineReducers } from "redux";
import { configReducers } from "./config-reducers/configReducers";

export default combineReducers({
  config: configReducers
});
