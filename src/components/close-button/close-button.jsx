import {ReactComponent as IconClose} from "../../assets/img/icon-close.svg";

const CloseButton = (props) => {
  const {className} = props;
  return (
    <button className={`${className} close-button`} type="button">
      <IconClose className="close-button__icon" />
      <span className="visually-hidden">Закрыть окно</span>
    </button>
  );
};

export default CloseButton;
