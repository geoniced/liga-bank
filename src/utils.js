export const extend = (a, b) => Object.assign({}, a, b);

export const isEscKeyPressed = (evt) => (evt.key === `Escape` || evt.key === `Esc`);

export const createFieldChangeHandler = (fieldName, setter) => {
  return (evt) => {
    let value = evt.target.value;

    window.localStorage.setItem(fieldName, value);
    setter(value);
  };
};
