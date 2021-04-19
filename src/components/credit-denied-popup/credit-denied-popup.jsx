import React from "react";
import {formatDecimalWithRubles} from "../../utils";

const CreditDeniedPopup = (props) => {
  const {
    creditName,
    creditMinimum,
  } = props;

  return (
    <section className="credit-denied-popup">
      <h2 className="credit-denied-popup__title">Наш банк не выдаёт {creditName} меньше {formatDecimalWithRubles(creditMinimum)}.</h2>
      <p className="credit-denied-popup__description">
        Попробуйте использовать другие параметры для расчёта.
      </p>
    </section>
  );
};

export default CreditDeniedPopup;
