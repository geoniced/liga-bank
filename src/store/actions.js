export const ActionType = {
  OPEN_LOGIN_POPUP: `OPEN_LOGIN_POPUP`,
  CLOSE_LOGIN_POPUP: `CLOSE_LOGIN_POPUP`,
  SET_CREDIT_GOAL: `SET_CREDIT_GOAL`,
  SET_CREDIT_PROPERTY_COST: `SET_CREDIT_PROPERTY_COST`,
  SET_INITIAL_FEE: `SET_INITIAL_FEE`,
  SET_CREDIT_PERIOD: `SET_CREDIT_PERIOD`,
  SET_DEFAULT_VALUES: `SET_DEFAULT_VALUES`,
};

export const openLoginPopup = () => ({
  type: ActionType.OPEN_LOGIN_POPUP,
});

export const closeLoginPopup = () => ({
  type: ActionType.CLOSE_LOGIN_POPUP,
});


export const setCreditGoal = (creditGoal) => ({
  type: ActionType.SET_CREDIT_GOAL,
  payload: creditGoal,
});

export const setCreditPropertyCost = (propertyCost) => ({
  type: ActionType.SET_CREDIT_PROPERTY_COST,
  payload: propertyCost,
});

export const setInitialFee = (initialFee) => ({
  type: ActionType.SET_INITIAL_FEE,
  payload: initialFee,
});

export const setCreditPeriod = (creditPeriod) => ({
  type: ActionType.SET_CREDIT_PERIOD,
  payload: creditPeriod,
});

export const setDefaultValues = (creditGoal) => ({
  type: ActionType.SET_DEFAULT_VALUES,
  payload: creditGoal,
});
