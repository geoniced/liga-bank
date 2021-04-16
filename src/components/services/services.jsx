import React, {useState} from "react";
import {ReactComponent as IconVault} from "../../assets/img/icon-vault.svg";
import {ReactComponent as IconCards} from "../../assets/img/icon-cards.svg";
import {ReactComponent as IconSecurity} from "../../assets/img/icon-security.svg";
import {ReactComponent as IconPhone} from "../../assets/img/icon-phone.svg";
import SliderButtons from "../slider-buttons/slider-buttons";
import DepositService from "../deposit-service/deposit-service";
import CreditService from "../credit-service/credit-service";
import InsuranceService from "../insurance-service/insurance-service";
import OnlineService from "../online-service/online-service";
import {Tab} from "../../const";
import TabItem from "../tab-item/tab-item";

const TABS = {
  [Tab.DEPOSITS]: {
    title: `Вклады`,
    type: Tab.DEPOSITS,
    component: DepositService,
    icon: IconVault,
  },
  [Tab.CREDITS]: {
    title: `Кредиты`,
    type: Tab.CREDITS,
    component: CreditService,
    icon: IconCards,
  },
  [Tab.INSURANCE]: {
    title: `Страхование`,
    type: Tab.INSURANCE,
    component: InsuranceService,
    icon: IconSecurity,
  },
  [Tab.ONLINE_SERVICES]: {
    title: `Онлайн сервисы`,
    type: Tab.ONLINE_SERVICES,
    component: OnlineService,
    icon: IconPhone,
  },
};

const getTabContentByTabType = (tabType) => {
  const TabContent = TABS[tabType].component;

  return <TabContent />;
};

const Services = () => {
  const [currentTab, setCurrentTab] = useState(Tab.DEPOSITS);

  const tabs = Object.values(TABS);

  const onTabClick = (evt) => {
    const tabType = evt.currentTarget.dataset.tabType;

    setCurrentTab(tabType);
  };

  return (
    <section className="page-content__services services">
      <h2 className="visually-hidden">Услуги</h2>

      {/* <!-- TODO: подумать о том переделать ли кнопки на ссылки --> */}
      <ul className="services__tabs tabs">
        {tabs.map((tab, i) => (
          <TabItem
            key={`service-tab-${i}`}
            type={tab.type}
            IconComponent={tab.icon}
            isActive={currentTab === tab.type}
            title={tab.title}
            onTabClick={onTabClick}
          />
        ))}

      </ul>

      <SliderButtons
        className="services__buttons-list"
        sliderItems={4}
      />

      {getTabContentByTabType(currentTab)}
    </section>
  );
};

export default Services;
