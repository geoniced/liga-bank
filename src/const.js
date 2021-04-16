export const CREDIT_OPTIONS = [
  {value: `mortgage`, label: `Ипотечное кредитование`},
  {value: `auto`, label: `Автомобильное кредитование`}
];

export const Tab = {
  DEPOSITS: `DEPOSITS`,
  CREDITS: `CREDITS`,
  INSURANCE: `INSURANCE`,
  ONLINE_SERVICES: `ONLINE_SERVICES`,
};

export const CREDIT_SELECT_PLACEHOLDER_TEXT = `Выберите цель кредита`;
export const SLIDER_CHANGE_INTERVAL = 4000;

export const LoginField = {
  LOGIN: `login-form-login`,
  PASSWORD: `login-form-password`,
};

const MediaQuery = {
  MOBILE: `@media (max-width: 767px)`
};

export const SELECT_STYLES = {
  control: (provided) => ({
    ...provided,
    border: `none`,
  }),
  container: (provided) => ({
    ...provided,
    width: `100%`,
    border: `1px solid #1F1E25`,
    borderRadius: `4px`,
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingTop: `16px`,
    paddingRight: `19px`,
    paddingBottom: `12px`,
    paddingLeft: `23px`,
    lineHeight: `140%`,
    fontSize: `16px`,
    fontWeight: `500`,
    [MediaQuery.MOBILE]: {
      paddingLeft: `14px`,
      paddingRight: `14px`,
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: `#1F1E25`,
  }),
  singleValue: (provided) => ({
    ...provided,
    top: `51%`,
    margin: `0`,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: `none`,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    justifyContent: `center`,
    width: `63px`,
    [MediaQuery.MOBILE]: {
      width: `45px`,
    }
  }),
};
