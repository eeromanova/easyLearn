import React from'react';
import styles from'./input.module.css';

function Input(props) {
    const {content, placeholder, status, changing}=props;
    const classInput=`${styles.input} ${styles[status]}`;

  return (
    <input className={classInput} type="text" placeholder={placeholder} readOnly={changing} defaultValue={content}/>
  );
}
export default Input;