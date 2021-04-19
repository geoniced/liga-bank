import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CreditGoal, CreditStep, INCOME_THRESHOLD_PERCENT} from "../../const";
import {getCreditGoal, getCreditPeriod, getCreditPropertyCost, getInitialFee, getUseMaternityCapital} from "../../store/selectors";
import CreditDeniedPopup from "../credit-denied-popup/credit-denied-popup";
import {formatDecimalWithRubles} from "../../utils";

const calculateMonthlyPayment = (creditCost, rate, years) => {
  const ratePerYear = (rate / 100) / 12;
  const months = years * 12;

  const monthlyPayment = creditCost * (ratePerYear + (ratePerYear / (Math.pow(1 + ratePerYear, months) - 1)));

  return monthlyPayment;
};

const calculateRequiredIncome = (monthlyPayment) => {
  return monthlyPayment / INCOME_THRESHOLD_PERCENT;
};

const CalculationFormOffers = (props) => {
  const {
    creditGoal,
    creditPropertyCost,
    initialFee,
    creditPeriod,
    useMaternityCapital,
  } = props;

  const creditInfo = CreditStep[creditGoal];
  const initialFeePercent = initialFee / creditPropertyCost * 100;
  const creditPercentData = creditInfo.creditPercent;

  let creditCost = creditPropertyCost - initialFee;
  let creditRate;

  if (creditGoal === CreditGoal.MORTGAGE) {
    creditRate = initialFeePercent >= creditPercentData.feePercentThreshold
      ? creditPercentData.valueWhenMore
      : creditPercentData.valueWhenLess;

    if (useMaternityCapital) {
      creditCost -= creditInfo.factors[0].costDown;
    }
  }


  if (creditCost < creditInfo.credit.min) {
    return (<CreditDeniedPopup />);
  }

  const monthlyPayment = Math.round(calculateMonthlyPayment(creditCost, creditRate, creditPeriod));
  const requiredIncome = Math.round(calculateRequiredIncome(monthlyPayment));

  return (
    <div className="calculation-form__result">
      <h3 className="calculation-form__result-title">Наше предложение</h3>

      <dl className="calculation-form__offers">
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">{creditInfo.creditSumTitle}</dt>
          <dd className="calculation-form__offer-value">{formatDecimalWithRubles(creditCost)}</dd>
        </div>
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">Процентная ставка</dt>
          <dd className="calculation-form__offer-value">{creditRate}%</dd>
        </div>
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">Ежемесячный платеж</dt>
          <dd className="calculation-form__offer-value">{formatDecimalWithRubles(monthlyPayment)}</dd>
        </div>
        <div className="calculation-form__offer-item">
          <dt className="calculation-form__offer-title">Необходимый доход</dt>
          <dd className="calculation-form__offer-value">{formatDecimalWithRubles(requiredIncome)}</dd>
        </div>
      </dl>

      <a href="#" className="calculation-form__request-button button">Оформить заявку</a>
    </div>
  );
};

CalculationFormOffers.propTypes = {
  creditGoal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  creditGoal: getCreditGoal(state),
  creditPropertyCost: getCreditPropertyCost(state),
  initialFee: getInitialFee(state),
  creditPeriod: getCreditPeriod(state),
  useMaternityCapital: getUseMaternityCapital(state),
});

export default connect(mapStateToProps)(CalculationFormOffers);
