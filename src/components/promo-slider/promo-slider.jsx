import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ReactComponent as IconSliderItem} from "../../assets/img/icon-slider-item.svg";
import {SLIDER_CHANGE_INTERVAL} from "../../const";

const PromoSlider = () => {
  return (
    <section className="page-content__promo-slider promo-slider">
      <Carousel
        interval={SLIDER_CHANGE_INTERVAL}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        emulateTouch
        autoPlay
        infiniteLoop
        renderIndicator={(onClickHandler, isSelected, index) => (
          <li
            onClick={onClickHandler}
            className={`slider-buttons__item ${isSelected ? `slider-buttons__item--active` : ``}`}
          >
            <button className="slider-buttons__button" type="button">
              <IconSliderItem className="slider-buttons__icon" />
              <span className="visually-hidden">{index + 1} слайд</span>
            </button>
          </li>
        )}
        className="promo-slider__list slider-buttons slider-buttons--promo-slider"
      >
        <div className="promo-slider__item promo-slider__item--credit">
          <div className="promo-slider__wrapper">
            <h2 className="promo-slider__title">Лига Банк</h2>
            <p className="promo-slider__description">Кредиты на любой случай</p>
            <a href="#" className="promo-slider__promo-button button button--white">Рассчитать кредит</a>
          </div>
        </div>
        <div className="promo-slider__item promo-slider__item--confidence">
          <div className="promo-slider__wrapper">
            <h2 className="promo-slider__title">Лига Банк</h2>
            <p className="promo-slider__description">Ваша уверенность в завтрашнем дне</p>
          </div>
        </div>
        <div className="promo-slider__item promo-slider__item--department">
          <div className="promo-slider__wrapper">
            <h2 className="promo-slider__title">Лига Банк</h2>
            <p className="promo-slider__description">Всегда рядом</p>
            <a href="#" className="promo-slider__promo-button promo-slider__promo-button--department button">Найти отделение</a>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default PromoSlider;
