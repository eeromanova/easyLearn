import React from "react";
import styles from "./input.module.css";


function Input(props) {
  const { content, nameInput, placeholder, status, changing, onHandleChange, onHandleFocus} = props;
  const classInput = `${styles.input} ${styles[status]}`;

  return (
    <input
      className={classInput}
      type="text"
      name={nameInput}
      placeholder={placeholder}
      readOnly={changing}
      value={content}
      onChange={onHandleChange}
      onMouseOut={onHandleFocus}
    />
  );
}
export default Input;
