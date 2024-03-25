import styles from "./error.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.containerouter}>
      <div className={styles.textcontainer}>
        <p className={styles.error}>ERROR</p>
        <h1 className={styles.header}>
          Oops... looks like this page doesn't seem to exist
        </h1>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
