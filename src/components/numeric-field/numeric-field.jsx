import React, {useState} from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconMinus} from "../../assets/img/icon-minus.svg";
import {ReactComponent as IconPlus} from "../../assets/img/icon-plus.svg";

const NumericField = (props) => {
  const {
    min,
    max,
    step,
    onChange,
    value,
    convertCallback,
    onOperationMinusClick,
    onOperationPlusClick,
  } = props;

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditable = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <div className="calculation-form__input-with-operations">
      {isEditing ? (
        <input
          className="calculation-form__input calculation-form__input--number"
          type="number"
          name="calculation-form-property-cost"
          id="calculation-form-property-cost"
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          onBlur={toggleEditable}
          value={value}
        />
      ) : (
        <input
          className="calculation-form__input calculation-form__input--number"
          type="text"
          name="calculation-form-property-cost"
          id="calculation-form-property-cost"
          onFocus={toggleEditable}
          value={convertCallback(value)}
          readOnly
        />
      )}

      <button onClick={onOperationMinusClick} className="calculation-form__operation-button calculation-form__operation-button--minus" type="button">
        <IconMinus className="calculation-form__operation-minus"/>
        <span className="visually-hidden">Уменьшить</span>
      </button>
      <button onClick={onOperationPlusClick} className="calculation-form__operation-button calculation-form__operation-button--plus" type="button">
        <IconPlus className="calculation-form__operation-plus"/>
        <span className="visually-hidden">Увеличить</span>
      </button>
    </div>
  );
};

NumericField.propTypes = {
  className: PropTypes.string,
};

export default NumericField;
