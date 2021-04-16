import React from "react";
import departmentsMapImg from "../../assets/img/deps-map-with-blips.jpg";
import departmentsMapImgTablet from "../../assets/img/deps-map-with-blips-tablet.jpg";
import departmentsMapImgMobile from "../../assets/img/deps-map-with-blips-mobile.jpg";

const BankDepartments = () => {
  return (
    <section className="page-content__bank-departments bank-departments container">
      <h2 className="bank-departments__title">Отделения Лига Банка</h2>

      <div className="bank-departments__map-wrapper">
        <picture className="bank-departments__picture-container">
          <source media="(max-width: 767px)" srcSet={departmentsMapImgMobile} />
          <source media="(max-width: 1023px)" srcSet={departmentsMapImgTablet} />
          <img className="bank-departments__map" src={departmentsMapImg} alt="Расположение отделений Лига Банков" width="1170" height="462" />
        </picture>
      </div>
    </section>
  );
};

export default BankDepartments;
