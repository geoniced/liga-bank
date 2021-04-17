/* eslint-disable no-console */
import React, {useState} from "react";
import CalculationFormOffers from "../calculation-form-offers/calculation-form-offers";
import CalculationFormSecondStep from "../calculation-form-second-step/calculation-form-second-step";
import SelectField from "../select-field/select-field";

const CreditGoal = {
  MORTGAGE: `mortgage`,
  AUTO: `auto`,
};

const CalculationForm = () => {
  const [creditGoalValue, setCreditGoalValue] = useState(null);

  const onCreditGoalChange = (option) => {
    setCreditGoalValue(option.value);
  };

  return (
    <form action="#" className="credit-calculator__calculation-form calculation-form">
      <div className="calculation-form__form-column-wrapper">
        <fieldset className="calculation-form__step-field-area calculation-form__step-field-area--step-1">
          <legend className="calculation-form__step-legend">Шаг 1. Цель кредита</legend>

          <div className="calculation-form__input-field-row">
            <label htmlFor="calculation-form-credit-goal" className="visually-hidden">Выберите цель кредита</label>
            <SelectField onChange={onCreditGoalChange} />
          </div>
        </fieldset>

        {creditGoalValue && <CalculationFormSecondStep />}
      </div>

      {creditGoalValue && <CalculationFormOffers />}
    </form>
  );
};

export default CalculationForm;
