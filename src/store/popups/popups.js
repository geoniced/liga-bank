import {REQUEST_DEFAULT_NUMBER} from "../../const";
import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  isLoginPopupOpened: false,
  isRequestFormOpened: false,
  requestNumber: REQUEST_DEFAULT_NUMBER,
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

    case ActionType.OPEN_REQUEST_FORM:
      return extend(state, {
        isRequestFormOpened: true,
      });
    case ActionType.CLOSE_REQUEST_FORM:
      return extend(state, {
        isRequestFormOpened: false,
      });
    case ActionType.SET_REQUEST_NUMBER:
      return extend(state, {
        requestNumber: action.payload,
      });
  }

  return state;
};

export {popups};
