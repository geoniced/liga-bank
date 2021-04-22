import React, {createRef, useCallback, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CloseButton from "../close-button/close-button";
import {closeLoginPopup} from "../../store/actions";
import {isEscKeyPressed, createFieldChangeHandler, createBlocklayerClickHandler} from "../../utils";
import {LoginField} from "../../const";
import LogoLoginImg from "../../assets/img/logo-login.svg";
import {ReactComponent as IconPasswordEyeClosed} from "../../assets/img/icon-password-eye-closed.svg";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {useLocalStorageFieldsSync} from "../../hooks/use-local-storage-fields-sync/use-local-storage-fields-sync";
import {useInputFocusOnOpen} from "../../hooks/use-input-focus-on-open/use-input-focus-on-open";

const LoginPopup = (props) => {
  const {closeLoginPopupAction} = props;
  const loginInputRef = createRef();

  const [loginValue, setLoginValue] = useState(``);
  const [passwordValue, setPasswordValue] = useState(``);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const FieldMap = {
    [LoginField.LOGIN]: {value: loginValue, setter: setLoginValue},
    [LoginField.PASSWORD]: {value: passwordValue, setter: setPasswordValue},
  };

  const onLoginChangeHandler = createFieldChangeHandler(LoginField.LOGIN, setLoginValue);
  const onPasswordChangeHandler = createFieldChangeHandler(LoginField.PASSWORD, setPasswordValue);

  const onBlockLayerClick = createBlocklayerClickHandler(closeLoginPopupAction);

  const onRevealPasswordMouseDown = () => {
    setIsPasswordShown(true);
  };

  const onRevealPasswordMouseUp = () => {
    setIsPasswordShown(false);
  };

  const onRevealPasswordKeyDown = () => {
    setIsPasswordShown(true);
  };

  const onRevealPasswordKeyUp = () => {
    setIsPasswordShown(false);
  };

  const onRevealPasswordBlur = () => {
    setIsPasswordShown(false);
  };

  const onCloseButtonClick = (evt) => {
    evt.preventDefault();

    closeLoginPopupAction();
  };

  const onEscKeyDown = useCallback((evt) => {
    if (isEscKeyPressed(evt)) {
      closeLoginPopupAction();
    }
  }, [closeLoginPopupAction]);

  usePreventPageScroll();
  useKeyDown(onEscKeyDown);
  useInputFocusOnOpen(loginInputRef);
  useLocalStorageFieldsSync(FieldMap);

  return (
    <section
      onClick={onBlockLayerClick}
      className="login-popup basic-popup"
    >
      <div className="login-popup__content-wrapper basic-popup__content-wrapper">
        <h2 className="visually-hidden">Вход в интернет-банк</h2>

        <a href="#" className="login-popup__logo">
          <img className="login-popup__logo-image" src={LogoLoginImg} alt="Логотип сайта Лига Банк" width="150" height="27" />
        </a>

        <CloseButton
          className="login-popup__close-button"
          onCloseButtonClick={onCloseButtonClick}
        />

        <form action="#" className="login-popup__form">
          <div className="login-popup__row-wrapper">
            <label className="login-popup__label" htmlFor="login-form-login">Логин</label>
            <input
              onChange={onLoginChangeHandler}
              value={loginValue}
              ref={loginInputRef}
              className="login-popup__input"
              type="text"
              name="login-form-login"
              id="login-form-login"
            />
          </div>

          <div className="login-popup__row-wrapper">
            <label className="login-popup__label" htmlFor="login-form-password">Пароль</label>
            <div className="login-popup__reveal-password-wrapper">
              <input
                onChange={onPasswordChangeHandler}
                value={passwordValue}
                className="login-popup__input"
                type={`${isPasswordShown ? `text` : `password`}`}
                name="login-form-password"
                id="login-form-password"
              />
              <button
                onMouseDown={onRevealPasswordMouseDown}
                onMouseUp={onRevealPasswordMouseUp}
                onKeyDown={onRevealPasswordKeyDown}
                onKeyUp={onRevealPasswordKeyUp}
                onMouseLeave={onRevealPasswordBlur}
                onBlur={onRevealPasswordBlur}
                className="login-popup__reveal-password-button"
                type="button"
              >
                <IconPasswordEyeClosed className="login-popup__reveal-password-icon" />
                <span className="visually-hidden">Показать пароль</span>
              </button>
            </div>
          </div>

          <p className="login-popup__forgot-password">
            <a href="forgot.html" className="login-popup__forgot-password-link">Забыли пароль?</a>
          </p>

          <button className="login-popup__submit button" type="submit">Войти</button>
        </form>
      </div>
    </section>
  );
};

LoginPopup.propTypes = {
  closeLoginPopupAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  closeLoginPopupAction() {
    dispatch(closeLoginPopup());
  },
});

export default connect(null, mapDispatchToProps)(LoginPopup);
