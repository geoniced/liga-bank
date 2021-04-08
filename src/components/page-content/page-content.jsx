import BankDepartments from "../bank-departments/bank-departments";
import CreditCalculator from "../credit-calculator/credit-calculator";
import PromoSlider from "../promo-slider/promo-slider";
import Services from "../services/services";

const PageContent = () => {
  return (
    <main className="page-content">
      <h1 className="visually-hidden">Сайт Лига Банка</h1>

      <PromoSlider />
      <Services />

      <CreditCalculator />

      <BankDepartments />
    </main>
  );
};

export default PageContent;
