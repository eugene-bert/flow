import {
  SET_SHOW_SIDEBAR,
  SET_DEVICE_SIZE,
  SET_LOGIN_CREDENTIALS,
  SET_LOGIN_CREDENTIALS_EMAIL,
  SET_LOGIN_CREDENTIALS_PASSWORD,
} from "./types";

export function setShowSideBar(value) {
  return {
    type: SET_SHOW_SIDEBAR,
    payload: value,
  };
}

export function setDeviceSize(value) {
  return {
    type: SET_DEVICE_SIZE,
    payload: value,
  };
}

