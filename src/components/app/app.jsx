import PageHeader from "../page-header/page-header";
import PageContent from "../page-content/page-content";
import PageFooter from "../page-footer/page-footer";
import LoginPopup from "../login-popup/login-popup";
import CreditDeniedPopup from "../credit-denied-popup/credit-denied-popup";
import CreditRequestedPopup from "../credit-requested-popup/credit-requested-popup";

const App = () => {
  return (
    <>
      <PageHeader />
      <PageContent />

      <LoginPopup />
      <CreditDeniedPopup />
      <CreditRequestedPopup />

      <PageFooter />
    </>
  );
};

export default App;
