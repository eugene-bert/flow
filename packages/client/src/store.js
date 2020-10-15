import { createStore } from "redux";
import { combineReducers } from "redux";
import sideBarReducer from './reducers/sideBarReducer';
import authReducer from './reducers/authReducer';
import issueReducer from './reducers/issueReducer';

const rootReducer = combineReducers({
  sideBarReducer: sideBarReducer,
  authReducer: authReducer,
  issueReducer: issueReducer
});

export const store = createStore(rootReducer);
