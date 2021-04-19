import React from "react";

const CreditDeniedPopup = () => {
  return (
    <section className="credit-denied-popup">
      <h2 className="credit-denied-popup__title">Наш банк не выдаёт ипотечные<br className="credit-denied-popup__word-break" /> кредиты меньше 500 000 рублей.</h2>
      <p className="credit-denied-popup__description">
        Попробуйте использовать другие параметры для расчёта.
      </p>
    </section>
  );
};

export default CreditDeniedPopup;
