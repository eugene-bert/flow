import { combineReducers } from "redux";
import { sideBarReducer, deviceSize, loginCredentials } from "./reducers";

export const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  deviceSize: deviceSize
});
