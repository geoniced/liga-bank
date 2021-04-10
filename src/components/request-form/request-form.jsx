const RequestForm = () => {
  return (
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
        <div className="request-form__field-row">
          <label className="visually-hidden" htmlFor="request-form-name">ФИО</label>
          <input className="request-form__input" type="text" name="request-form-name" id="request-form-name" placeholder="ФИО" />
        </div>

        <div className="request-form__field-row request-form__field-row--halves">
          <div className="request-form__half-field-wrapper">
            <label className="visually-hidden" htmlFor="request-form-phone">Телефон</label>
            <input className="request-form__input" type="tel" name="request-form-phone" id="request-form-phone" placeholder="Телефон" />
          </div>
          <div className="request-form__half-field-wrapper">
            <label className="visually-hidden" htmlFor="request-form-email">E-mail</label>
            <input className="request-form__input" type="email" name="request-form-email" id="request-form-email" placeholder="E-mail" />
          </div>
        </div>

        <button className="request-form__send button" type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default RequestForm;
