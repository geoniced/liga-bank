import LogoLoginImg from "../../assets/img/logo-login.svg";
import CloseButton from "../close-button/close-button";
import {ReactComponent as IconPasswordEyeClosed} from "../../assets/img/icon-password-eye-closed.svg";

const LoginPopup = () => {
  return (
    <section className="login-popup basic-popup">
      <h2 className="visually-hidden">Вход в интернет-банк</h2>

      <a href="#" className="login-popup__logo">
        <img className="login-popup__logo-image" src={LogoLoginImg} alt="Логотип сайта Лига Банк" width="150" height="27" />
      </a>

      <CloseButton className="login-popup__close-button" />

      <form action="#" className="login-popup__form">
        <div className="login-popup__row-wrapper">
          <label className="login-popup__label" htmlFor="login-form-login">Логин</label>
          <input className="login-popup__input" type="text" name="login-form-login" id="login-form-login"/>
        </div>

        <div className="login-popup__row-wrapper">
          <label className="login-popup__label" htmlFor="login-form-password">Пароль</label>
          <div className="login-popup__reveal-password-wrapper">
            <input className="login-popup__input" type="password" name="login-form-password" id="login-form-password"/>
            <button className="login-popup__reveal-password-button" type="button">
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
    </section>
  );
};

export default LoginPopup;
