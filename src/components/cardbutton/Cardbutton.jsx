import styles from "./cardbutton.module.css";
import React from "react";

function Cardbutton(props) {
  return <button onClick={props.onHandleClick} className={styles.cardbutton} >CHECK</button>;
}
export default Cardbutton;
