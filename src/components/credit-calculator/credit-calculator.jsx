import CalculationForm from "../calculation-form/calculation-form";
import RequestForm from "../request-form/request-form";

const CreditCalculator = () => {
  return (
    <section className="page-content__credit-calculator credit-calculator">
      <h2 className="credit-calculator__title">Кредитный калькулятор</h2>

      <CalculationForm />
      <RequestForm />
    </section>
  );
};

export default CreditCalculator;
