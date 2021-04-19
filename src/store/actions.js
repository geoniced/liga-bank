export const ActionType = {
  OPEN_LOGIN_POPUP: `OPEN_LOGIN_POPUP`,
  CLOSE_LOGIN_POPUP: `CLOSE_LOGIN_POPUP`,
  SET_CREDIT_GOAL: `SET_CREDIT_GOAL`,
  SET_CREDIT_PROPERTY_COST: `SET_CREDIT_PROPERTY_COST`,
  SET_INITIAL_FEE: `SET_INITIAL_FEE`,
  SET_CREDIT_PERIOD: `SET_CREDIT_PERIOD`,
  SET_DEFAULT_VALUES: `SET_DEFAULT_VALUES`,
  SET_MATERNITY_CAPITAL_USE: `SET_MATERNITY_CAPITAL_USE`,
  SET_CASCO_USE: `SET_CASCO_USE`,
  SET_LIFE_INSURANCE_USE: `SET_LIFE_INSURANCE_USE`,
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

export const setMaternityCapitalUse = (useMaternityCapital) => ({
  type: ActionType.SET_MATERNITY_CAPITAL_USE,
  payload: useMaternityCapital,
});

export const setCascoUse = (useCasco) => ({
  type: ActionType.SET_CASCO_USE,
  payload: useCasco,
});

export const setLifeInsuranceUse = (useLifeInsurance) => ({
  type: ActionType.SET_MATERNITY_CAPITAL_USE,
  payload: useLifeInsurance,
});
