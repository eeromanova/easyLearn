import styles from "./headermain.module.css";
import Logo from "../../assets/image/svg/logo.svg";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

function Headermain() {
  return (
    <div className={styles.container}>
      <Link className={styles.logolink} to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      {/* <img src={Logo} alt="logo" className={styles.logo} /> */}
      <div className={styles.text__container}>
        <h1 className={styles.first}>easy</h1>
        <p className={styles.second}>learn</p>
      </div>
      <Menu />
    </div>
  );
}

export default Headermain;
