import { SET_ALERT, AlertAction } from '../type';

export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
    payload: message,
  }
}
