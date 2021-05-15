import { combineReducers } from "redux";
import { toastReducers } from "./toast-reducers/toastReducers";

export default combineReducers({
  config: toastReducers
});
