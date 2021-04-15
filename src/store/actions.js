export const ActionType = {
  OPEN_LOGIN_POPUP: `OPEN_LOGIN_POPUP`,
  CLOSE_LOGIN_POPUP: `CLOSE_LOGIN_POPUP`,
};

export const openLoginPopup = () => ({
  type: ActionType.OPEN_LOGIN_POPUP,
});

export const closeLoginPopup = () => ({
  type: ActionType.CLOSE_LOGIN_POPUP,
});
