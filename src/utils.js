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
  return `${value} лет`;
};
