import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  isLoginPopupOpened: false,
  isRequestFormOpened: false,
};

const popups = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_LOGIN_POPUP:
      return extend(state, {
        isLoginPopupOpened: true,
      });
    case ActionType.CLOSE_LOGIN_POPUP:
      return extend(state, {
        isLoginPopupOpened: false,
      });
  }

  return state;
};

export {popups};
