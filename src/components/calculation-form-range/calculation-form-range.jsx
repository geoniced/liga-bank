import React, {useState} from "react";
import {Range} from "react-range";
import {ReactComponent as IconRangeThumb} from "../../assets/img/icon-range-thumb.svg";

const CalculationFormRange = (props) => {
  const {
    step,
    min,
    max,
    scaleValues,
  } = props;
  const [values, setValues] = useState(scaleValues);

  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={(newValues) => setValues(newValues)}
      renderTrack={({props: trackProps, children}) => (
        <div
          {...trackProps}
          className="calculation-form__range-track"
        >
          {children}
        </div>
      )}
      renderThumb={({props: thumbProps}) => (
        <IconRangeThumb
          {...thumbProps}
          className="calculation-form__range-thumb"
        />
      )}
    />
  );
};

export default CalculationFormRange;
