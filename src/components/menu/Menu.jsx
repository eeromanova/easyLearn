import { Link } from "react-router-dom";
import styles from "./menu.module.css";

function Menu() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/training">
        Training
      </Link>
    </div>
  );
}
export default Menu;
