import styles from "./cardbutton.module.css";
import React from "react";
import { useRef, useEffect } from "react";

function Cardbutton(props) {
  const buttonFocus = useRef(null);

  useEffect(() => {
    buttonFocus.current.focus();
  }, [props.newCard]);

  return (
    <button
      onClick={props.onHandleClick}
      className={styles.cardbutton}
      ref={buttonFocus}
    >
      CHECK
    </button>
  );
}
export default Cardbutton;
