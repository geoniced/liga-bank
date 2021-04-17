export const CreditGoal = {
  MORTGAGE: `mortgage`,
  AUTO: `auto`,
};

export const CREDIT_OPTIONS = [
  {value: CreditGoal.MORTGAGE, label: `Ипотечное кредитование`},
  {value: CreditGoal.AUTO, label: `Автомобильное кредитование`}
];

export const CreditStep = {
  [CreditGoal.MORTGAGE]: {
    cost: {
      min: 1200000,
      max: 2500000,
      step: 100000,
    },
    initialFee: {
      min: 10,
      step: 5,
    },
    credit: {
      min: 500000,
      minYears: 5,
      maxYears: 30,
      step: 1,
    },
    factors: [
      {title: `Использовать материнский капитал`, name: `use-maternal-capital`}
    ],
    creditName: `Стоимость недвижимости`,
    creditSumTitle: `Сумма ипотеки`
  },
  [CreditGoal.AUTO]: {
    cost: {
      min: 500000,
      max: 5000000,
      step: 50000,
    },
    initialFee: {
      min: 20,
      step: 5,
    },
    credit: {
      min: 200000,
      minYears: 1,
      maxYears: 5,
      step: 1,
    },
    factors: [
      {title: `Оформить КАСКО в нашем банке`, name: `take-casco`},
      {title: `Оформить Страхование жизни в нашем банке`, name: `take-life-insurance`}
    ],
    creditName: `Стоимость автомобиля`,
    creditSumTitle: `Сумма кредита`
  },
};

export const CREDIT_DEFAULT_COST = 2000000;

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
