import departmentsMapImg from "../../assets/img/departments-map.jpg";
import {ReactComponent as IconLocationBlip} from "../../assets/img/icon-location-blip.svg";

const BankDepartments = () => {
  return (
    <section className="page-content__bank-departments bank-departments">
      <h2 className="bank-departments__title">Отделения Лига Банка</h2>

      <div className="bank-departments__map-wrapper">
        <img className="bank-departments__map" src={departmentsMapImg} alt="Расположение отделений Лига Банков" width="1170" height="462" />

        <IconLocationBlip className="bank-departments__blip bank-departments__blip--moscow"/>
        <IconLocationBlip className="bank-departments__blip bank-departments__blip--saratov"/>
        <IconLocationBlip className="bank-departments__blip bank-departments__blip--kazan"/>
        <IconLocationBlip className="bank-departments__blip bank-departments__blip--tyumen"/>
        <IconLocationBlip className="bank-departments__blip bank-departments__blip--omsk"/>
      </div>
    </section>
  );
};

export default BankDepartments;
