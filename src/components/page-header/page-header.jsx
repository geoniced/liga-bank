import {ReactComponent as IconLogin} from "../../assets/img/icon-login.svg";
import Logo from "../logo/logo";

const PageHeader = () => {
  return (
    <header className="page-header">
      <nav className="page-header__main-navigation main-navigation">
        <Logo className="main-navigation__logo" />
        <ul className="main-navigation__site-navigation site-navigation">
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Услуги</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Рассчитать кредит</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Конвертер валют</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Контакты</a>
          </li>
        </ul>

        <a href="#" className="main-navigation__login login">
          <IconLogin className="login__icon" />
          <span className="login__title">Войти в Интернет-банк</span>
        </a>
      </nav>
    </header>
  );
};

export default PageHeader;
