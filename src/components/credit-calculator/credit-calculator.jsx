import React from "react";
import CalculationForm from "../calculation-form/calculation-form";
import RequestForm from "../request-form/request-form";

const CreditCalculator = () => {
  return (
    <section className="page-content__credit-calculator credit-calculator container">
      <h2 className="credit-calculator__title" id="credit-calculator">Кредитный калькулятор</h2>

      <CalculationForm />
      <RequestForm />
    </section>
  );
};

export default CreditCalculator;
