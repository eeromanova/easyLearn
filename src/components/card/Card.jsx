// import data from "../data/data.json";
import React from "react";
import { useState } from "react";
import styles from "./card.module.css";
import Cardbutton from "../cardbutton/Cardbutton";

function Card(props) {
  const { term, transcription, translation } = props;
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setClicked(true);
  };

  let checkTranslation = <Cardbutton onHandleClick={handleClick} />;
  if (clicked) {
    checkTranslation = <p className={styles.translation}>{translation}</p>;
  } else {checkTranslation = <Cardbutton onHandleClick={handleClick} />;};
  return (
    <div className={styles.container}>
      <div className={styles.container_words}>
        <p className={styles.term}>{term}</p>
        <p className={styles.transcript}>{transcription}</p>
      </div>
      {checkTranslation}
    </div>
  );
}
export default Card;
