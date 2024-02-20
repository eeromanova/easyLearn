import React from "react";
import styles from "./tabitem.module.css";

function Item(props) {
  // const {container, container_top, container_bottom} = props;
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <p></p>
        <div></div>
      </div>
      <div className={styles.container_bottom}>
        <div>
          <input type="text" />
          <label htmlFor="">Term</label>
        </div>
        <div>
          <input type="text" />
          <label htmlFor="">Description</label>
        </div>
        <div>
          <input type="text" />
          <label htmlFor="">Translation</label>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Item;
