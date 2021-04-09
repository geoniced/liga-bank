import logo from "../../assets/img/logo.svg";
import {ReactComponent as IconLogin} from "../../assets/img/icon-login.svg";

const PageHeader = () => {
  return (
    <header className="page-header">
      <nav className="page-header__main-navigation main-navigation">
        <a className="main-navigation__logo logo">
          <img className="logo__image" src={logo} alt="Логотип сайта Лига Банк" width="149" height="25" />
        </a>
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
