import React from "react";
import data from "../../assets/data/data.json";
import Item from "../tabitem/Item";
import styles from "./list.module.css";
import Tabinputfinal from "../tabitem/Tabinputfinal";

function List() {
  return (
    <div className={styles.container}>
      <Tabinputfinal />
      {data.map((item) => (
        <Item
          key={item.id}
          term={item.english}
          transcription={item.transcription}
          translation={item.russian}
        />
      ))}
    </div>
  );
}
export default List;
