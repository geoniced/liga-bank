const CreditCalculator = () => {
  return (
    <section className="page-content__credit-calculator credit-calculator">
      <h2 className="credit-calculator__title">Кредитный калькулятор</h2>

      <form action="#" className="credit-calculator__calculation-form calculation-form">
        <fieldset className="calculation-form__step-field-area">
          <legend className="calculation-form__step-legend">Шаг 1. Цель кредита</legend>

          <label htmlFor="calculation-form-credit-goal" className="visually-hidden">Выберите цель кредита</label>
          <select className="calculation-form__select-field" name="calculation-form-credit-goal" id="calculation-form-credit-goal">
            <option className="calculation-form__option" value="mortgage">Ипотечное кредитование</option>
            <option className="calculation-form__option" value="auto">Автомобильное кредитование</option>
          </select>
        </fieldset>

        <fieldset className="calculation-form__step-field-area">
          <legend className="calculation-form__step-legend">Шаг 2. Введите параметры кредита</legend>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-property-cost" className="calculation-form__label">Стоимость недвижимости</label>
            <input className="calculation-form__input" type="number" name="calculation-form-property-cost" id="calculation-form-property-cost" min="1200000" max="25000000" step="100000" />
            <p className="calculation-form__field-description">От 1 200 000  до 25 000 000 рублей</p>
          </div>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-initial-fee" className="calculation-form__label">Первоначальный взнос</label>
            <input className="calculation-form__input" type="number" name="calculation-form-initial-fee" id="calculation-form-initial-fee" />
            <input className="calculation-form__range" type="range" name="calculation-form-initial-fee-range" id="calculation-form-initial-fee-range" step="5" min="10" max="100" />
          </div>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-credit-time" className="calculation-form__label">Срок кредитования</label>
            <input className="calculation-form__input" type="number" name="calculation-form-credit-time" id="calculation-form-credit-time" />
            <input className="calculation-form__range" type="range" name="calculation-form-credit-time-range" id="calculation-form-credit-time-range" step="1" min="5" max="30" />
          </div>

          <div className="calculation-form__checkbox-row">
            <input className="calculation-form__checkbox" type="checkbox" name="calculation-form-use-maternal-capital" id="calculation-form-use-maternal-capital" checked readOnly />
            <label className="calculation-form__checkbox-label" htmlFor="calculation-form-use-maternal-capital">Использовать материнский капитал</label>
          </div>
        </fieldset>

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

      <section className="credit-calculator__request-form request-form">
        <h2 className="request-form__title">Шаг 3. Оформление заявки</h2>

        <dl className="request-form__data">
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Номер заявки</dt>
            <dd className="request-form__data-value">№ 0010</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Цель кредита</dt>
            <dd className="request-form__data-value">Ипотека</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Стоимость недвижимости</dt>
            <dd className="request-form__data-value">2 000 000 рублей</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Первоначальный взнос</dt>
            <dd className="request-form__data-value">200 000 рублей</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Срок кредитования</dt>
            <dd className="request-form__data-value">5 лет</dd>
          </div>
        </dl>

        <form action="#" className="request-form__form">
          <label className="visually-hidden" htmlFor="request-form-name">ФИО</label>
          <input className="request-form__input" type="text" name="request-form-name" id="request-form-name" placeholder="ФИО" />

          <label className="visually-hidden" htmlFor="request-form-phone">Телефон</label>
          <input className="request-form__input" type="tel" name="request-form-phone" id="request-form-phone" placeholder="Телефон" />

          <label className="visually-hidden" htmlFor="request-form-email">E-mail</label>
          <input className="request-form__input" type="email" name="request-form-email" id="request-form-email" placeholder="E-mail" />

          <button className="request-form__send button" type="submit">Отправить</button>
        </form>
      </section>
    </section>
  );
};

export default CreditCalculator;
