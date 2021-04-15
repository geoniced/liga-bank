import {useEffect} from "react";

export const useLoginPopupOpenLogic = (loginInputRef, FieldMap) => {
  useEffect(() => {
    loginInputRef.current.focus();

    const storage = window.localStorage;
    Object.entries(storage).forEach(([storeName, storeValue]) => {
      let assignedValue = storeValue;

      if (FieldMap[storeName]) {
        if (FieldMap[storeName].isNumeric) {
          assignedValue = Number(storeValue);
        }

        FieldMap[storeName].setter(assignedValue);
      }
    });
  }, []);
};
