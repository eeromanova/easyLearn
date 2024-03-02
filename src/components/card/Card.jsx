import data from "../data/data.json";
import React from "react";
import { useState } from "react";
import styles from "./card.module.css";
import Cardbutton from "../cardbutton/Cardbutton";

function Card() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setClicked(true);
  };
  let checkTranslation = <Cardbutton onHandleClick={handleClick} />;
  if (clicked) {
    checkTranslation = <p className={styles.translation}>{data[2].russian}</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.container_words}>
        <p className={styles.term}>{data[2].english}</p>
        <p className={styles.transcript}>{data[2].transcription}</p>
      </div>
      {checkTranslation}
    </div>
  );
}
export default Card;
