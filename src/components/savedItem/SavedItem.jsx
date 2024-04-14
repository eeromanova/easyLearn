import React from "react";
import styles from "./savedItem.module.css";

function SavedItem(props) {
  const { content } = props;

  return <p className={styles.p}>{content}</p>;
}
export default SavedItem;
