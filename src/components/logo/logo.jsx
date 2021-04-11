import logoDesktop from "../../assets/img/logo.svg";
import logoTablet from "../../assets/img/logo-tablet.svg";

const Logo = (props) => {
  const {className} = props;

  return (
    <a className={`${className} logo`}>
      <picture className="logo__picture">
        {/* <source media="(max-width: 767px)" srcset="img/logo-mobile.svg" /> */}
        <source media="(max-width: 1023px)" srcSet={logoTablet} />
        <img className="logo__image" src={logoDesktop} alt="Логотип сайта Лига Банк" width="149" height="25" />
      </picture>
    </a>
  );
};

export default Logo;
