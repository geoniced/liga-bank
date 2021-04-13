import piggyBankImg from "../../assets/img/piggybank.png";
import piggyBankImgTablet from "../../assets/img/piggybank-tablet.png";
import piggyBankImgMobile from "../../assets/img/piggybank-mobile.png";
import carOnAPileOfCoinsImg from "../../assets/img/car-on-a-pile-of-coins.png";
import carOnAPileOfCoinsImgTablet from "../../assets/img/car-on-a-pile-of-coins-tablet.png";
import carOnAPileOfCoinsImgMobile from "../../assets/img/car-on-a-pile-of-coins-mobile.png";
import heartShapedLockImg from "../../assets/img/heart-shaped-lock.png";
import heartShapedLockImgTablet from "../../assets/img/heart-shaped-lock-tablet.png";
import heartShapedLockImgMobile from "../../assets/img/heart-shaped-lock-mobile.png";
import ligaBankOnMobileImg from "../../assets/img/liga-bank-on-mobile.png";
import ligaBankOnMobileImgTablet from "../../assets/img/liga-bank-on-mobile-tablet.png";
import ligaBankOnMobileImgMobile from "../../assets/img/liga-bank-on-mobile-mobile.png";
import {ReactComponent as IconVault} from "../../assets/img/icon-vault.svg";
import {ReactComponent as IconCards} from "../../assets/img/icon-cards.svg";
import {ReactComponent as IconSecurity} from "../../assets/img/icon-security.svg";
import {ReactComponent as IconPhone} from "../../assets/img/icon-phone.svg";
import SliderButtons from "../slider-buttons/slider-buttons";

const Services = () => {
  return (
    <section className="page-content__services services">
      <h2 className="visually-hidden">Услуги</h2>

      {/* <!-- TODO: подумать о том переделать ли кнопки на ссылки --> */}
      <ul className="services__tabs tabs">
        <li className="tabs__item">
          <button className="tabs__button tabs__button--active">
            <IconVault className="tabs__icon" />
            <span className="tabs__text">Вклады</span>
          </button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button">
            <IconCards className="tabs__icon" />
            <span className="tabs__text">Кредиты</span>
          </button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button">
            <IconSecurity className="tabs__icon" />
            <span className="tabs__text">Страхование</span>
          </button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button">
            <IconPhone className="tabs__icon" />
            <span className="tabs__text">Онлайн сервисы</span>
          </button>
        </li>
      </ul>

      <SliderButtons
        className="services__buttons-list"
        sliderItems={4}
      />

      <article className="services__service-block service-block">
        <div className="service-block__description-column">
          <h3 className="service-block__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h3>
          <ul className="service-block__features">
            <li className="service-block__features-item">Проценты по вкладам до 7%</li>
            <li className="service-block__features-item">Разнообразные условия</li>
            <li className="service-block__features-item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
          </ul>
          <a href="#" className="service-block__more-button button">Узнать подробнее</a>
        </div>
        <div className="service-block__img-column">
          <picture>
            <source media="(max-width: 767px)" srcSet={piggyBankImgMobile} />
            <source media="(max-width: 1023px)" srcSet={piggyBankImgTablet} />
            <img className="service-block__image" src={piggyBankImg} alt="Копилка с возрастающими столбиками монет" width="440" height="290" />
          </picture>
        </div>
      </article>

      <article className="services__service-block service-block service-block--credit">
        <div className="service-block__description-column">
          <h3 className="service-block__title">Лига Банк выдает кредиты под любые цели</h3>
          <ul className="service-block__features">
            <li className="service-block__features-item">Ипотечный кредит</li>
            <li className="service-block__features-item">Автокредит</li>
            <li className="service-block__features-item">Потребительский кредит</li>
          </ul>
          <p className="service-block__description">Рассчитайте ежемесячный платеж<br/> и ставку по кредиту воспользовавшись нашим <a className="service-block__link" href="#">кредитным калькулятором</a></p>
        </div>
        <div className="service-block__img-column">
          <picture>
            <source media="(max-width: 767px)" srcSet={carOnAPileOfCoinsImgMobile} />
            <source media="(max-width: 1023px)" srcSet={carOnAPileOfCoinsImgTablet} />
            <img className="service-block__image" src={carOnAPileOfCoinsImg} alt="Автомобиль на стопке монет" width="440" height="290" />
          </picture>
        </div>
      </article>

      <article className="services__service-block service-block service-block--insurance">
        <div className="service-block__description-column">
          <h3 className="service-block__title">Лига Страхование — застрахуем все что захотите</h3>
          <ul className="service-block__features">
            <li className="service-block__features-item">Автомобильное страхование</li>
            <li className="service-block__features-item">Страхование жизни и здоровья</li>
            <li className="service-block__features-item">Страхование недвижимости</li>
          </ul>
          <a href="#" className="service-block__more-button button">Узнать подробнее</a>
        </div>
        <div className="service-block__img-column">
          <picture>
            <source media="(max-width: 767px)" srcSet={heartShapedLockImgMobile} />
            <source media="(max-width: 1023px)" srcSet={heartShapedLockImgTablet} />
            <img className="service-block__image" src={heartShapedLockImg} alt="Замок с иконкой сердечка на нем" width="440" height="290" />
          </picture>
        </div>
      </article>

      <article className="services__service-block service-block service-block--mobile">
        <div className="service-block__description-column">
          <h3 className="service-block__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h3>
          <ul className="service-block__features">
            <li className="service-block__features-item">Мобильный банк,<br/> который всегда под рукой</li>
            <li className="service-block__features-item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
          </ul>
          <a href="#" className="service-block__more-button button">Узнать подробнее</a>
        </div>
        <div className="service-block__img-column">
          <picture>
            <source media="(max-width: 767px)" srcSet={ligaBankOnMobileImgMobile} />
            <source media="(max-width: 1023px)" srcSet={ligaBankOnMobileImgTablet} />
            <img className="service-block__image" src={ligaBankOnMobileImg} alt="Приложение Лига-Банка на телефоне" width="440" height="290" />
          </picture>
        </div>
      </article>
    </section>
  );
};

export default Services;
