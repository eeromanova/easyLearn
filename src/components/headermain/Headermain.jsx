import "./Headermain.css";
import Logo from "../svg/logo.svg";

function Headermain() {
  return (
    <div className="header__container">
      <img src={Logo} alt="logo" className="logo" />
      <h1 className="header">easyLearn</h1>
    </div>
  );
}

export default Headermain;
