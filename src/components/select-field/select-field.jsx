import React from "react";
import Select, {components} from "react-select";
import {CREDIT_OPTIONS, CREDIT_SELECT_PLACEHOLDER_TEXT, SELECT_STYLES} from "../../const";
import {ReactComponent as IconSelectDrop} from "../../assets/img/icon-select-drop.svg";


const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <IconSelectDrop />
  </components.DropdownIndicator>
);

const SelectField = () => {
  return (
    <Select
      className="select-field"
      classNamePrefix="select-field"
      components={{DropdownIndicator}}
      styles={SELECT_STYLES}
      options={CREDIT_OPTIONS}
      placeholder={CREDIT_SELECT_PLACEHOLDER_TEXT}
    />
  );
};

export default SelectField;