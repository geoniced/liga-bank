/* eslint-disable no-console */
import {CreditStep} from "../const";
import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  isLoginPopupOpened: false,
  creditGoal: null,
  creditPropertyCost: 0,
  initialFee: 0,
  creditPeriod: 0,
  useMaternityCapital: false,
  useCasco: false,
  useLifeInsurance: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_LOGIN_POPUP:
      return extend(state, {
        isLoginPopupOpened: true,
      });
    case ActionType.CLOSE_LOGIN_POPUP:
      return extend(state, {
        isLoginPopupOpened: false,
      });

    case ActionType.SET_CREDIT_GOAL:
      return extend(state, {
        creditGoal: action.payload,
      });
    case ActionType.SET_CREDIT_PROPERTY_COST:
      return extend(state, {
        creditPropertyCost: action.payload,
      });
    case ActionType.SET_INITIAL_FEE:
      return extend(state, {
        initialFee: action.payload,
      });
    case ActionType.SET_CREDIT_PERIOD:
      return extend(state, {
        creditPeriod: action.payload,
      });
    case ActionType.SET_DEFAULT_VALUES:
      const creditInfo = CreditStep[action.payload];

      return extend(state, {
        creditPropertyCost: creditInfo.defaults.propertyCost,
        initialFee: creditInfo.defaults.initialFee,
        creditPeriod: creditInfo.defaults.period,
      });
    case ActionType.SET_MATERNITY_CAPITAL_USE:
      return extend(state, {
        useMaternityCapital: action.payload,
      });
    case ActionType.SET_CASCO_USE:
      return extend(state, {
        useCasco: action.payload,
      });
    case ActionType.SET_LIFE_INSURANCE_USE:
      return extend(state, {
        useLifeInsurance: action.payload,
      });
  }

  return state;
};

export {reducer};
