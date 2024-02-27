import React from "react";
import data from "../data/data.json";
import Item from  '../tabitem/Item';
import styles from "./list.module.css";
import Tabinput from "../tabitem/Tabinput";
import Button from "../button/Button";
import Edit from "../svg/edit_icon.svg";

function List() {
  const edit= <Button content={Edit} />;

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
