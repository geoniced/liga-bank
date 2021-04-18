import React, {useState} from "react";
import PropTypes from "prop-types";
import CalculationFormRange from "../calculation-form-range/calculation-form-range";
import {CreditStep} from "../../const";
import NumericField from "../numeric-field/numeric-field";
import {calculatePercentMaxed, formatDecimal, formatDecimalWithRubles, formatDecimalWithYears} from "../../utils";
import {ReactComponent as IconMinus} from "../../assets/img/icon-minus.svg";
import {ReactComponent as IconPlus} from "../../assets/img/icon-plus.svg";
import {useStateResetOnPropChange} from "../../hooks/use-state-reset-to-defaults/use-state-reset-to-defaults";

const CalculationFormSecondStep = (props) => {
  const {
    creditGoal,
  } = props;

  const creditInfo = CreditStep[creditGoal];

  const [creditPropertyCost, setCreditPropertyCost] = useState(creditInfo.defaults.propertyCost);
  const [initialFee, setInitialFee] = useState(creditInfo.defaults.initialFee);
  const [creditPeriod, setCreditPeriod] = useState(creditInfo.defaults.period);

  const initialFeePercent = calculatePercentMaxed(initialFee, creditPropertyCost, creditInfo.initialFee.rangeMax);

  const onPropertyCostChange = (evt) => {
    const propertyCost = Number(evt.target.value);
    setCreditPropertyCost(propertyCost);
  };

  const onInitialFeeChange = (evt) => {
    const newInitialFee = Number(evt.target.value);
    setInitialFee(newInitialFee);
  };

  const onInitialFeeRangeChange = ([percentValue]) => {
    const initialFeeValue = creditPropertyCost * (percentValue / 100);
    setInitialFee(initialFeeValue);
  };

  const onCreditPeriodChange = (evt) => {
    const newCreditPeriod = Number(evt.target.value);
    setCreditPeriod(newCreditPeriod);
  };

  const onCreditPeriodRangeChange = ([newValue]) => {
    setCreditPeriod(newValue);
  };

  const onOperationMinusClick = () => {
    setCreditPropertyCost((prevState) => {
      const newValue = prevState - creditInfo.cost.step;
      return newValue < creditInfo.cost.min ? creditInfo.cost.min : newValue;
    });
  };

  const onOperationPlusClick = () => {
    setCreditPropertyCost((prevState) => {
      const newValue = prevState + creditInfo.cost.step;
      return newValue > creditInfo.cost.max ? creditInfo.cost.max : newValue;
    });
  };

  const stateSettersToDefaultList = [
    {setter: setCreditPropertyCost, defaultValue: creditInfo.defaults.propertyCost},
    {setter: setInitialFee, defaultValue: creditInfo.defaults.initialFee},
    {setter: setCreditPeriod, defaultValue: creditInfo.defaults.period},
  ];

  useStateResetOnPropChange(creditGoal, stateSettersToDefaultList);

  return (
    <fieldset className="calculation-form__step-field-area calculation-form__step-field-area--step-2">
      <legend className="calculation-form__step-legend">Шаг 2. Введите параметры кредита</legend>

      <div className="calculation-form__input-field-row">
        <label htmlFor="calculation-form-property-cost" className="calculation-form__label">{creditInfo.creditName}</label>
        <div className="calculation-form__input-with-operations">
          <NumericField
            name="calculation-form-property-cost"
            min={creditInfo.cost.min}
            max={creditInfo.cost.max}
            step={creditInfo.cost.step}
            convertCallback={formatDecimalWithRubles}
            onChange={onPropertyCostChange}
            value={creditPropertyCost}
          />

          <button onClick={onOperationMinusClick} className="calculation-form__operation-button calculation-form__operation-button--minus" type="button">
            <IconMinus className="calculation-form__operation-minus"/>
            <span className="visually-hidden">Уменьшить</span>
          </button>
          <button onClick={onOperationPlusClick} className="calculation-form__operation-button calculation-form__operation-button--plus" type="button">
            <IconPlus className="calculation-form__operation-plus"/>
            <span className="visually-hidden">Увеличить</span>
          </button>
        </div>
        <p className="calculation-form__field-description">От {formatDecimal(creditInfo.cost.min)} ​​&nbsp;до {formatDecimal(creditInfo.cost.max)} рублей</p>
      </div>

      <div className="calculation-form__input-field-row">
        <label htmlFor="calculation-form-initial-fee" className="calculation-form__label">Первоначальный взнос</label>

        <NumericField
          name="calculation-form-initial-fee"
          className="calculation-form__input--range"
          min={creditPropertyCost * (creditInfo.initialFee.min / 100)}
          step={creditPropertyCost * (creditInfo.initialFee.step / 100)}
          convertCallback={formatDecimalWithRubles}
          onChange={onInitialFeeChange}
          value={initialFee}
        />
        <CalculationFormRange
          onChange={onInitialFeeRangeChange}
          step={creditInfo.initialFee.step}
          min={creditInfo.initialFee.min}
          max={creditInfo.initialFee.rangeMax}
          values={[initialFeePercent]}
        />
        <div className="calculation-form__range-description">
          <span className="calculation-form__range-value">{creditInfo.initialFee.min}%</span>
        </div>
      </div>

      <div className="calculation-form__input-field-row">
        <label htmlFor="calculation-form-credit-time" className="calculation-form__label">Срок кредитования</label>
        <NumericField
          name="calculation-form-credit-time"
          className="calculation-form__input--range"
          min={creditInfo.credit.minYears}
          max={creditInfo.credit.maxYears}
          step={creditInfo.credit.step}
          convertCallback={formatDecimalWithYears}
          onChange={onCreditPeriodChange}
          value={creditPeriod}
        />

        <CalculationFormRange
          step={creditInfo.credit.step}
          min={creditInfo.credit.minYears}
          max={creditInfo.credit.maxYears}
          onChange={onCreditPeriodRangeChange}
          values={[creditPeriod]}
        />
        <div className="calculation-form__range-description">
          <span className="calculation-form__range-value">{formatDecimalWithYears(creditInfo.credit.minYears)}</span>
          <span className="calculation-form__range-value">{formatDecimalWithYears(creditInfo.credit.maxYears)}</span>
        </div>
      </div>

      {creditInfo.factors.map((factor, i) => (
        <div key={`factor-${i}-${factor.name}`} className="calculation-form__checkbox-row">
          <input
            className="calculation-form__checkbox visually-hidden"
            type="checkbox"
            name={`calculation-form-${factor.name}`}
            id={`calculation-form-${factor.name}`}
          />
          <label
            className="calculation-form__checkbox-label"
            htmlFor={`calculation-form-${factor.name}`}
          >
            {factor.title}
          </label>
        </div>
      ))}

    </fieldset>
  );
};

CalculationFormSecondStep.propTypes = {
  creditGoal: PropTypes.string.isRequired,
};

export default CalculationFormSecondStep;
