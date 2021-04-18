import {useEffect} from "react";

export const useStateResetOnPropChange = (prop, stateSettersToDefaultList) => {
  useEffect(() => {
    if (prop) {
      stateSettersToDefaultList.forEach((item) => {
        item.setter(item.defaultValue);
      });
    }
  }, [prop]);
};
