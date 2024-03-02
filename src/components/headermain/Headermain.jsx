import styles from "./headermain.module.css";
import Logo from "../../assets/image/svg/logo.svg";

function Headermain() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <div className={styles.text__container} >
        <h1 className={styles.first} >easy</h1>
        <p className={styles.second} >learn</p>
      </div>
    </div>
  );
}

export default Headermain;
