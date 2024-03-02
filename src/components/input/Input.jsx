import React from'react';
import styles from'./input.module.css';

function Input(props) {
    const {content, placeholder, status, changing, value}=props;
    const classInput=`${styles.input} ${styles[status]}`;
  return (
    <input className={classInput} type="text" defaultValue={content} placeholder={placeholder} readOnly={changing} onChange={value}/>
  );
}
export default Input;