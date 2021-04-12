import React from "react";
import {ReactComponent as IconMinus} from "../../assets/img/icon-minus.svg";
import {ReactComponent as IconPlus} from "../../assets/img/icon-plus.svg";
import CalculationFormRange from "../calculation-form-range/calculation-form-range";

const CalculationForm = () => {
  return (
    <form action="#" className="credit-calculator__calculation-form calculation-form">
      <div className="calculation-form__form-column-wrapper">
        <fieldset className="calculation-form__step-field-area calculation-form__step-field-area--step-1">
          <legend className="calculation-form__step-legend">Шаг 1. Цель кредита</legend>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-credit-goal" className="visually-hidden">Выберите цель кредита</label>
            <select className="calculation-form__select-field" name="calculation-form-credit-goal" id="calculation-form-credit-goal">
              <option className="calculation-form__option" value="mortgage">Ипотечное кредитование</option>
              <option className="calculation-form__option" value="auto">Автомобильное кредитование</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="calculation-form__step-field-area calculation-form__step-field-area--step-2">
          <legend className="calculation-form__step-legend">Шаг 2. Введите параметры кредита</legend>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-property-cost" className="calculation-form__label">Стоимость недвижимости</label>
            <div className="calculation-form__input-with-operations">
              <input className="calculation-form__input calculation-form__input--number" type="number" name="calculation-form-property-cost" id="calculation-form-property-cost" min="1200000" max="25000000" step="100000" />
              <button className="calculation-form__operation-button calculation-form__operation-button--minus" type="button">
                <IconMinus className="calculation-form__operation-minus"/>
                <span className="visually-hidden">Уменьшить</span>
              </button>
              <button className="calculation-form__operation-button calculation-form__operation-button--plus" type="button">
                <IconPlus className="calculation-form__operation-plus"/>
                <span className="visually-hidden">Увеличить</span>
              </button>
            </div>

            <p className="calculation-form__field-description">От 1 200 000 ​​&nbsp;до 25 000 000 рублей</p>
          </div>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-initial-fee" className="calculation-form__label">Первоначальный взнос</label>
            {/* Maybe an output tag... */}
            <input className="calculation-form__input calculation-form__input--range" type="text" name="calculation-form-initial-fee" id="calculation-form-initial-fee" />
            <CalculationFormRange
              step={5}
              min={10}
              max={100}
              scaleValues={[100]}
            />
            <div className="calculation-form__range-description">
              <span className="calculation-form__range-value">10%</span>
            </div>
          </div>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-credit-time" className="calculation-form__label">Срок кредитования</label>
            <input className="calculation-form__input calculation-form__input--range" type="text" name="calculation-form-credit-time" id="calculation-form-credit-time" />
            {/* <input className="calculation-form__range" type="range" name="calculation-form-credit-time-range" id="calculation-form-credit-time-range" step="1" min="5" max="30" /> */}
            <CalculationFormRange
              step={1}
              min={5}
              max={30}
              scaleValues={[30]}
            />
            <div className="calculation-form__range-description">
              <span className="calculation-form__range-value">5 лет</span>
              <span className="calculation-form__range-value">30 лет</span>
            </div>
          </div>

          <div className="calculation-form__checkbox-row">
            <input className="calculation-form__checkbox visually-hidden" type="checkbox" name="calculation-form-use-maternal-capital" id="calculation-form-use-maternal-capital" />
            <label className="calculation-form__checkbox-label" htmlFor="calculation-form-use-maternal-capital">Использовать материнский капитал</label>
          </div>
        </fieldset>
      </div>

      <div className="calculation-form__result">
        <h3 className="calculation-form__result-title">Наше предложение</h3>

        <dl className="calculation-form__offers">
          <div className="calculation-form__offer-item">
            <dt className="calculation-form__offer-title">Сумма ипотеки</dt>
            <dd className="calculation-form__offer-value">1 330 000 рублей</dd>
          </div>
          <div className="calculation-form__offer-item">
            <dt className="calculation-form__offer-title">Процентная ставка</dt>
            <dd className="calculation-form__offer-value">9,40%</dd>
          </div>
          <div className="calculation-form__offer-item">
            <dt className="calculation-form__offer-title">Ежемесячный платеж</dt>
            <dd className="calculation-form__offer-value">27 868 рублей</dd>
          </div>
          <div className="calculation-form__offer-item">
            <dt className="calculation-form__offer-title">Необходимый доход</dt>
            <dd className="calculation-form__offer-value">61 929 рублей</dd>
          </div>
        </dl>

        <a href="#" className="calculation-form__request-button button">Оформить заявку</a>
      </div>
    </form>
  );
};

export default CalculationForm;
