import {ReactComponent as IconSliderItem} from "../../assets/img/icon-slider-item.svg";

const PromoSlider = () => {
  return (
    <section className="page-content__promo-slider promo-slider">
      {/* <!-- TODO: посмотреть как слайдеры я делал ранее --> */}
      <ul className="promo-slider__list">
        <li className="promo-slider__item promo-slider__item--credit">
          <h2 className="promo-slider__title">Лига Банк</h2>
          <p className="promo-slider__description">Кредиты на любой случай</p>
          <a href="#" className="promo-slider__promo-button button button--white">Рассчитать кредит</a>
        </li>
        <li className="promo-slider__item promo-slider__item--confidence">
          <h2 className="promo-slider__title">Лига Банк</h2>
          <p className="promo-slider__description">Ваша уверенность в завтрашнем дне</p>
        </li>
        <li className="promo-slider__item promo-slider__item--department">
          <h2 className="promo-slider__title">Лига Банк</h2>
          <p className="promo-slider__description">Всегда рядом</p>
          <a href="#" className="promo-slider__promo-button button">Найти отделение</a>
        </li>
      </ul>

      <ul className="promo-slider__buttons-list">
        <li className="promo-slider__buttons-item promo-slider__buttons-item--active">
          <button className="promo-slider__button" type="button">
            <IconSliderItem className="promo-slider__icon" />
            <span className="visually-hidden">1 слайд</span>
          </button>
        </li>
        <li className="promo-slider__buttons-item">
          <button className="promo-slider__button" type="button">
            <IconSliderItem className="promo-slider__icon" />
            <span className="visually-hidden">2 слайд</span>
          </button>
        </li>
        <li className="promo-slider__buttons-item">
          <button className="promo-slider__button" type="button">
            <IconSliderItem className="promo-slider__icon" />
            <span className="visually-hidden">3 слайд</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default PromoSlider;
