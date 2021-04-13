import SliderButtons from "../slider-buttons/slider-buttons";

const PromoSlider = () => {
  return (
    <section className="page-content__promo-slider promo-slider">
      {/* <!-- TODO: посмотреть как слайдеры я делал ранее --> */}
      <ul className="promo-slider__list">
        <li className="promo-slider__item promo-slider__item--credit">
          <div className="promo-slider__wrapper">
            <h2 className="promo-slider__title">Лига Банк</h2>
            <p className="promo-slider__description">Кредиты на любой случай</p>
            <a href="#" className="promo-slider__promo-button button button--white">Рассчитать кредит</a>
          </div>

        </li>
        <li className="promo-slider__item promo-slider__item--confidence">
          <div className="promo-slider__wrapper">
            <h2 className="promo-slider__title">Лига Банк</h2>
            <p className="promo-slider__description">Ваша уверенность в завтрашнем дне</p>
          </div>

        </li>
        <li className="promo-slider__item promo-slider__item--department">
          <div className="promo-slider__wrapper">
            <h2 className="promo-slider__title">Лига Банк</h2>
            <p className="promo-slider__description">Всегда рядом</p>
            <a href="#" className="promo-slider__promo-button promo-slider__promo-button--department button">Найти отделение</a>
          </div>

        </li>
      </ul>

      <SliderButtons
        className="promo-slider__buttons-list"
        sliderItems={3}
      />
    </section>
  );
};

export default PromoSlider;
