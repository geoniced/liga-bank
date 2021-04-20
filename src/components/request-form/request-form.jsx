import React, {createRef, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NumberFormat from "react-number-format";
import {closeRequestForm, setRequestNumber} from "../../store/actions";
import {getCreditGoal, getCreditPeriod, getCreditPropertyCost, getInitialFee, getUseMaternityCapital, getRequestNumber} from "../../store/selectors";
import {calculateCreditCost, createFieldChangeHandler, formatDecimalWithRubles, formatDecimalWithYears, formatNumberToThousandsWithZeros, getNumericFieldValue} from "../../utils";
import {CreditGoal, CreditStep, RequestField} from "../../const";
import {useInputFocusOnOpen} from "../../hooks/use-input-focus-on-open/use-input-focus-on-open";
import {useLocalStorageFieldsSync} from "../../hooks/use-local-storage-fields-sync/use-local-storage-fields-sync";

const RequestForm = (props) => {
  const {
    requestNumber,
    setRequestNumberAction,
    creditGoal,
    creditPropertyCost,
    initialFee,
    creditPeriod,
    closeRequestFormAction,
    useMaternityCapital,
  } = props;

  const nameRef = createRef();

  const [name, setName] = useState(``);
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);

  const FieldMap = {
    [RequestField.NAME]: {value: name, setter: setName},
    [RequestField.PHONE]: {value: phone, setter: setPhone},
    [RequestField.EMAIL]: {value: email, setter: setEmail},
  };

  const onNameChangeHandler = createFieldChangeHandler(RequestField.NAME, setName);
  const onPhoneChangeHandler = createFieldChangeHandler(RequestField.PHONE, setPhone, getNumericFieldValue);
  const onEmailChangeHandler = createFieldChangeHandler(RequestField.EMAIL, setEmail);

  const creditInfo = CreditStep[creditGoal];

  const creditCostData = {
    creditPropertyCost,
    initialFee,
    creditGoal,
    useMaternityCapital: creditGoal === CreditGoal.MORTGAGE && useMaternityCapital,
    maternityCapitalCostDown: creditInfo.maternityCapitalCostDown,
  };

  const creditCost = calculateCreditCost(creditCostData);

  const onBlockLayerClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      closeRequestFormAction();
    }
  };

  const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    closeRequestFormAction();
    setRequestNumberAction(requestNumber + 1);
  };

  useInputFocusOnOpen(nameRef);
  useLocalStorageFieldsSync(FieldMap);

  return (
    <section
      onClick={onBlockLayerClick}
      className="credit-calculator__request-form request-form basic-popup"
    >
      <div className="request-form__wrapper basic-popup__wrapper">
        <h2 className="request-form__title">Шаг 3. Оформление заявки</h2>

        <dl className="request-form__data">
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Номер заявки</dt>
            <dd className="request-form__data-value">№ {formatNumberToThousandsWithZeros(requestNumber)}</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Цель кредита</dt>
            <dd className="request-form__data-value">{creditInfo.creditTypeName}</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">{creditInfo.creditName}</dt>
            <dd className="request-form__data-value">{formatDecimalWithRubles(creditCost)}</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Первоначальный взнос</dt>
            <dd className="request-form__data-value">{formatDecimalWithRubles(initialFee)}</dd>
          </div>
          <div className="request-form__data-item">
            <dt className="request-form__data-title">Срок кредитования</dt>
            <dd className="request-form__data-value">{formatDecimalWithYears(creditPeriod)}</dd>
          </div>
        </dl>

        <form action="#" className="request-form__form">
          <div className="request-form__field-row">
            <label className="visually-hidden" htmlFor="request-form-name">ФИО</label>
            <input
              ref={nameRef}
              onChange={onNameChangeHandler}
              value={name}
              className="request-form__input"
              type="text"
              name="request-form-name"
              id="request-form-name"
              placeholder="ФИО"
            />
          </div>

          <div className="request-form__field-row request-form__field-row--halves">
            <div className="request-form__half-field-wrapper">
              <label className="visually-hidden" htmlFor="request-form-phone">Телефон</label>
              {/* <input className="request-form__input" type="tel" name="request-form-phone" id="request-form-phone" placeholder="Телефон" /> */}
              <NumberFormat
                onValueChange={onPhoneChangeHandler}
                value={phone}
                className="request-form__input"
                name="request-form-phone"
                id="request-form-phone"
                format="+7 (###) ###-##-##"
                mask="_"
                placeholder="Телефон"
              />
            </div>
            <div className="request-form__half-field-wrapper">
              <label className="visually-hidden" htmlFor="request-form-email">E-mail</label>
              <input
                onChange={onEmailChangeHandler}
                value={email}
                className="request-form__input"
                type="email"
                name="request-form-email"
                id="request-form-email"
                placeholder="E-mail"
              />
            </div>
          </div>

          <button
            onClick={onSubmitButtonClick}
            className="request-form__send button"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>

    </section>
  );
};

RequestForm.propTypes = {
  requestNumber: PropTypes.number.isRequired,
  setRequestNumberAction: PropTypes.func.isRequired,
  creditGoal: PropTypes.string,
  creditPropertyCost: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditPeriod: PropTypes.number.isRequired,
  useMaternityCapital: PropTypes.bool,
  closeRequestFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  requestNumber: getRequestNumber(state),
  creditGoal: getCreditGoal(state),
  creditPropertyCost: getCreditPropertyCost(state),
  initialFee: getInitialFee(state),
  creditPeriod: getCreditPeriod(state),
  useMaternityCapital: getUseMaternityCapital(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeRequestFormAction() {
    dispatch(closeRequestForm());
  },
  setRequestNumberAction(requestNumber) {
    dispatch(setRequestNumber(requestNumber));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
