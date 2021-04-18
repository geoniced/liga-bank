import React, {useState} from "react";
import PropTypes from "prop-types";

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

  const toggleEditable = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      {isEditing ? (
        <input
          className={`calculation-form__input ${className}`}
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
          className={`calculation-form__input ${className}`}
          type="text"
          name={name}
          id={name}
          onFocus={toggleEditable}
          value={convertCallback(value)}
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
  className: PropTypes.string,
};

export default NumericField;
