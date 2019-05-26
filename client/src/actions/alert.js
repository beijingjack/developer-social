import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

//setAlert is action creator. Then make the action as a thunk function which will be called
// use "dispatch" to dispatch new action
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id
    }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
