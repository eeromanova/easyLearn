import React from "react";
import data from "../data/data.json";
import Item from  '../tabitem/Item';
import styles from "./list.module.css";
import Tabinput from "../tabitem/Tabinput"; 

function List() {
  return (
    <div className={styles.container}>  
      <div>
        <Tabinput />
      </div>
      <div>
        {data.map((item) => (
          <Item
            key={item.id}
            term={item.english}
            transcription={item.transcription}
            translation={item.russian}
          />
        ))}
      </div>
    </div>
  );
}
export default List;
