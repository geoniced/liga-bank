import departmentsMapImg from "../../assets/img/departments-map.jpg";

const BankDepartments = () => {
  return (
    <section className="page-content__bank-departments bank-departments">
      <h2 className="bank-departments__title">Отделения Лига Банка</h2>

      <img className="bank-departments__map" src={departmentsMapImg} alt="Расположение отделений Лига Банков" width="1170" height="462" />
    </section>
  );
};

export default BankDepartments;
