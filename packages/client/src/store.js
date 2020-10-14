import { createStore } from "redux";
import { combineReducers } from "redux";
import sideBarReducer from './reducers/sideBarReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  authReducer: authReducer
});

export const store = createStore(rootReducer);
