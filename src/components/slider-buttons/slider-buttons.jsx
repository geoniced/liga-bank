import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconSliderItem} from "../../assets/img/icon-slider-item.svg";

const SliderButtons = (props) => {
  const {
    sliderItems,
    className,
  } = props;

  return (
    <ul className={`${className} slider-buttons`}>
      {new Array(sliderItems).fill(``).map((_, i) => (
        <li key={`${className}-item-${i}`} className={`slider-buttons__item ${i === 0 ? `slider-buttons__item--active` : ``}`}>
          <button className="slider-buttons__button" type="button">
            <IconSliderItem className="slider-buttons__icon" />
            <span className="visually-hidden">{i + 1} слайд</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

SliderButtons.propTypes = {
  sliderItems: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default SliderButtons;
