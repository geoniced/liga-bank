import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {SLIDER_CHANGE_INTERVAL} from "../../const";
import PromoSliderItem from "../promo-slider-item/promo-slider-item";
import SliderButtonItem from "../slider-button-item/slider-button-item";

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
          <SliderButtonItem
            onClickHandler={onClickHandler}
            isSelected={isSelected}
            index={index}
          />
        )}
        className="promo-slider__list slider-buttons slider-buttons--promo-slider"
      >
        <PromoSliderItem itemModifierClass="credit">
          <h2 className="promo-slider__title">Лига Банк</h2>
          <p className="promo-slider__description">Кредиты на любой случай</p>
          <a href="#credit-calculator" className="promo-slider__promo-button button button--white">Рассчитать кредит</a>
        </PromoSliderItem>
        <PromoSliderItem itemModifierClass="confidence">
          <h2 className="promo-slider__title">Лига Банк</h2>
          <p className="promo-slider__description">Ваша уверенность в завтрашнем дне</p>
        </PromoSliderItem>
        <PromoSliderItem itemModifierClass="department">
          <h2 className="promo-slider__title">Лига Банк</h2>
          <p className="promo-slider__description">Всегда рядом</p>
          <a href="#bank-departments" className="promo-slider__promo-button promo-slider__promo-button--department button">Найти отделение</a>
        </PromoSliderItem>
      </Carousel>
    </section>
  );
};

export default PromoSlider;
