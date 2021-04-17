import React from "react";

const CalculationFormOffers = (props) => {
  return (
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
  );
};

export default CalculationFormOffers;
