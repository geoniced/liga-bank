import {CreditGoal, YearPostfix, YearWordChangeLimits} from "./const";

export const extend = (a, b) => Object.assign({}, a, b);

export const isEscKeyPressed = (evt) => (evt.key === `Escape` || evt.key === `Esc`);

const getTargetValue = (evt) => evt.target.value;
export const getNumericFieldValue = (valuesObject) => valuesObject.value;

export const createFieldChangeHandler = (fieldName, setter, valueGetter = getTargetValue) => {
  return (evt) => {
    let value = valueGetter(evt);

    window.localStorage.setItem(fieldName, value);
    setter(value);
  };
};

export const formatDecimal = (value) => {
  const formatter = new Intl.NumberFormat(`ru-RU`, {
    style: `decimal`,
  });

  return formatter.format(value);
};

export const formatDecimalWithRubles = (value) => {
  return `${formatDecimal(value)} рублей`;
};

export const formatDecimalWithYears = (value) => {
  let yearPostfix = YearPostfix.PLURAL;
  if (value === YearWordChangeLimits.SINGULAR) {
    yearPostfix = YearPostfix.SINGULAR;
  } else if (value > YearWordChangeLimits.SINGULAR && value < YearWordChangeLimits.LESS_FIVE) {
    yearPostfix = YearPostfix.LESS_FIVE;
  }

  return `${value} ${yearPostfix}`;
};

export const formatNumberToThousandsWithZeros = (value) => {
  let zerosCount = 0;
  if (value < 10) {
    zerosCount = 3;
  } else if (value < 100) {
    zerosCount = 2;
  } else if (value < 1000) {
    zerosCount = 1;
  }

  return `0`.repeat(zerosCount) + value;
};

export const calculatePercentInRange = (initialFee, creditPropertyCost, minPercent, maxPercent) => {
  let initialFeePercent = (initialFee / creditPropertyCost) * 100;
  initialFeePercent = initialFeePercent > maxPercent ? maxPercent : initialFeePercent;
  initialFeePercent = initialFeePercent < minPercent ? minPercent : initialFeePercent;

  return initialFeePercent;
};

export const calculateCreditCost = ({creditPropertyCost, initialFee, creditGoal, useMaternityCapital, maternityCapitalCostDown}) => {
  let creditCost = creditPropertyCost - initialFee;
  if (creditGoal === CreditGoal.MORTGAGE && useMaternityCapital) {
    creditCost -= maternityCapitalCostDown;
  }

  return creditCost;
};
