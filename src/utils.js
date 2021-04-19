import {YearPostfix, YearWordChangeLimits} from "./const";

export const extend = (a, b) => Object.assign({}, a, b);

export const isEscKeyPressed = (evt) => (evt.key === `Escape` || evt.key === `Esc`);

export const createFieldChangeHandler = (fieldName, setter) => {
  return (evt) => {
    let value = evt.target.value;

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

export const calculatePercentInRange = (initialFee, creditPropertyCost, minPercent, maxPercent) => {
  let initialFeePercent = (initialFee / creditPropertyCost) * 100;
  initialFeePercent = initialFeePercent > maxPercent ? maxPercent : initialFeePercent;
  initialFeePercent = initialFeePercent < minPercent ? minPercent : initialFeePercent;

  return initialFeePercent;
};
