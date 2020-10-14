import {
  SET_SHOW_SIDEBAR,
  SET_DEVICE_SIZE,
  SET_LOGIN_CREDENTIALS,
  SET_LOGIN_CREDENTIALS_EMAIL,
  SET_LOGIN_CREDENTIALS_PASSWORD,
} from "./types";

export const sideBarReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SHOW_SIDEBAR:
      return {
        sidebarIsOpen: action.payload,
      };
    default:
      return state;
  }
};

export const deviceSize = (state = "", action) => {
  switch (action.type) {
    case SET_DEVICE_SIZE:
      return (state = action.payload);
    default:
      return state;
  }
};
