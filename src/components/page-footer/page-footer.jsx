import logo from "../../assets/img/logo.svg";
import {ReactComponent as IconSmartPhone} from "../../assets/img/icon-smartphone.svg";
import {ReactComponent as IconBasePhone} from "../../assets/img/icon-basephone.svg";
import {ReactComponent as IconFacebook} from "../../assets/img/icon-fb.svg";
import {ReactComponent as IconInstagram} from "../../assets/img/icon-instagram.svg";
import {ReactComponent as IconTwitter} from "../../assets/img/icon-twitter.svg";
import {ReactComponent as IconYoutube} from "../../assets/img/icon-yt.svg";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <div className="page-footer__contact-address contact-address">
          <a href="#" className="contact-address__logo logo">
            <img className="logo__image" src={logo} alt="Логотип сайта Лига Банк" width="149" height="25" />
          </a>

          <address className="contact-address__address">150015, г. Москва, ул. Московская, д. 32</address>
          <p className="contact-address__copyright">
            Генеральная лицензия Банка России №1050
            Ⓒ Лига Банк, 2019
          </p>
        </div>

        <ul className="page-footer__site-navigation site-navigation site-navigation--vertical">
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Услуги</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Рассчитать кредит</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Контакты</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Задать вопрос</a>
          </li>
        </ul>

        <div className="page-footer__phone-contacts page-footer__phone-contacts--mobile">
          <a href="tel:*0904" className="page-footer__phone">
            <IconSmartPhone className="page-footer__mobile-phone-icon" />
            <span className="page-footer__phone-number">*0904</span>
          </a>
          <p className="page-footer__phone-description">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>

        <div className="page-footer__phone-contacts page-footer__phone-contacts--base">
          <a href="tel:88001112233" className="page-footer__phone">
            <IconBasePhone className="page-footer__base-phone-icon" />
            <span className="page-footer__phone-number">8 800 111 22 33</span>
          </a>
          <p className="page-footer__phone-description">Бесплатный для всех городов России</p>
        </div>

        <ul className="page-footer__socials socials">
          <li className="socials__item">
            <a href="#" className="socials__link">
              <IconFacebook className="socials__icon socials__icon--fb"/>
              <span className="visually-hidden">Facebook</span>
            </a>
          </li>
          <li className="socials__item">
            <a href="#" className="socials__link">
              <IconInstagram className="socials__icon socials__icon--instagram"/>
              <span className="visually-hidden">Instagram</span>
            </a>
          </li>
          <li className="socials__item">
            <a href="#" className="socials__link">
              <IconTwitter className="socials__icon socials__icon--twitter"/>
              <span className="visually-hidden">Twitter</span>
            </a>
          </li>
          <li className="socials__item">
            <a href="#" className="socials__link">
              <IconYoutube className="socials__icon socials__icon--yt"/>
              <span className="visually-hidden">YouTube</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PageFooter;
