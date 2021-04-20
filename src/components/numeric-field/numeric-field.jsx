import React, {useState} from "react";
import PropTypes from "prop-types";
import {INVALID_NUMERIC_FIELD_MESSAGE} from "../../const";
import {isValueInRange} from "../../utils";

const NumericField = (props) => {
  const {
    name,
    className,
    min,
    max,
    step,
    onChange,
    value,
    convertCallback,
  } = props;

  const [isEditing, setIsEditing] = useState(false);

  const isFieldValid = isValueInRange(value, min, max);

  const toggleEditable = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      {isEditing ? (
        <input
          className={`calculation-form__input ${className} ${!isFieldValid ? `calculation-form__input--invalid` : ``}`}
          type="number"
          name={name}
          id={name}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          onBlur={toggleEditable}
          value={value}
        />
      ) : (
        <input
          className={`calculation-form__input ${className} ${!isFieldValid ? `calculation-form__input--invalid` : ``}`}
          type="text"
          name={name}
          id={name}
          onFocus={toggleEditable}
          value={isFieldValid ? convertCallback(value) : INVALID_NUMERIC_FIELD_MESSAGE}
          readOnly
        />
      )}
    </>
  );
};

NumericField.defaultProps = {
  className: `calculation-form__input--number`,
};

NumericField.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  convertCallback: PropTypes.func.isRequired,
};

export default NumericField;
