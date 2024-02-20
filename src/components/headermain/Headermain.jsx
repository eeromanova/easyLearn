import "./Headermain.css";
import Logo from "../svg/logo.svg";

function Headermain() {
  return (
    <div className="header__container">
      <img src={Logo} alt="logo" className="logo" />
      <div className="header__text_container">
        <h1 className="header__first">easy</h1>
        <p className="header__second">Learn</p>
      </div>
    </div>
  );
}

export default Headermain;
