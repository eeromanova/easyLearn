// import data from "../data/data.json";
import React from "react";
import { useState } from "react";
import styles from "./card.module.css";
import Cardbutton from "../cardbutton/Cardbutton";

function Cardchange(props) {
  const { term, transcription, translation } = props;
  const [clicked, setClicked] = useState(false);
  let stylefront = `${styles.containerfront} ${styles.containerfront_unclick}`;
  let styleback = `${styles.containerback} ${styles.containerback_unclick}`;
  // let checkTranslation = <Cardbutton onHandleClick={handleClick} />;
  const handleClick = () => {
    console.log("clicked");
    setClicked(true);
  };
  if (clicked) {
    stylefront = `${styles.containerfront} ${styles.containerfront_click}`;
    styleback = `${styles.containerback} ${styles.containerback_click}`;
    // checkTranslation = <p className={styles.translation}>{translation}</p>;
  }
  return (
    <div className={styles.containermain}>
      <div className={stylefront}>
        <div className={styles.container_words}>
          <p className={styles.term}>{term}</p>
          <p className={styles.transcript}>{transcription}</p>
        </div>
        <Cardbutton onHandleClick={handleClick} />
      </div>
      <div className={styleback}>
        <div className={styles.container_words}>
          <p className={styles.term}>{term}</p>
          <p className={styles.transcript}>{transcription}</p>
          <p className={styles.translation}>{translation}</p>
        </div>
      </div>
    </div>
  );
}
export default Cardchange;
