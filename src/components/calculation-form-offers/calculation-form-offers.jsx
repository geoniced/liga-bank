import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CreditGoal, CreditStep} from "../../const";
import {getCreditGoal, getCreditPropertyCost, getInitialFee, getUseMaternityCapital} from "../../store/selectors";
import CreditDeniedPopup from "../credit-denied-popup/credit-denied-popup";
import {formatDecimalWithRubles} from "../../utils";

const CalculationFormOffers = (props) => {
  const {
    creditGoal,
    creditPropertyCost,
    initialFee,
    useMaternityCapital,
  } = props;

  const creditInfo = CreditStep[creditGoal];
  const initialFeePercent = initialFee / creditPropertyCost * 100;

  let creditCost = creditPropertyCost - initialFee;
  let creditPercent;

  if (creditGoal === CreditGoal.MORTGAGE) {
    creditPercent = initialFeePercent >= 15 ? 8.5 : 9.4;

    if (useMaternityCapital) {
      creditCost -= creditInfo.factors[0].costDown;
    }
  }


  if (creditCost < creditInfo.credit.min) {
    return (<CreditDeniedPopup />);
  }

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
          <dd className="calculation-form__offer-value">{creditPercent}%</dd>
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

CalculationFormOffers.propTypes = {
  creditGoal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  creditGoal: getCreditGoal(state),
  creditPropertyCost: getCreditPropertyCost(state),
  initialFee: getInitialFee(state),
  useMaternityCapital: getUseMaternityCapital(state),
});

export default connect(mapStateToProps)(CalculationFormOffers);
