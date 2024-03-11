import React from "react";
import styles from "./input.module.css";

function Input(props) {
  const { content, placeholder, status, changing, onHandleChange } = props;
  const classInput = `${styles.input} ${styles[status]}`;

  return (
    <input
      className={classInput}
      type="text"
      placeholder={placeholder}
      readOnly={changing}
      value={content}
      onChange={onHandleChange}
    />
  );
}
export default Input;
