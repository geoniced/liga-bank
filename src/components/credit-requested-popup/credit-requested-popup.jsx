import CloseButton from "../close-button/close-button";

const CreditRequestedPopup = () => {
  return (
    <section className="credit-denied-popup basic-popup">
      <CloseButton className="credit-denied-popup__close-button" />

      <h2 className="credit-denied-popup__title basic-popup__title">Спасибо за обращение в наш банк.</h2>
      <p className="credit-denied-popup__description basic-popup__description">
        Наш менеджер скоро свяжется с вами по указанному номеру телефона.
      </p>
    </section>
  );
};

export default CreditRequestedPopup;
