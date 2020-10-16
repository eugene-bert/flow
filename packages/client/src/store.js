import { createStore } from "redux";
import { combineReducers } from "redux";
import sideBarReducer from './reducers/sideBarReducer';
import authReducer from './reducers/authReducer';
import issueReducer from './reducers/issueReducer';
import mainReducer from './reducers/mainReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  authReducer: authReducer,
  userReducer: userReducer,
  issueReducer: issueReducer,
  mainReducer: mainReducer
});

export const store = createStore(rootReducer);
