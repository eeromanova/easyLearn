// import data from "../data/data.json";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./card.module.css";
import CardButton from "../cardbutton/CardButton";

function CardChangeRuEn(props) {
  const { term, transcription, translation, onHandleClick, newCard } = props;
  const [clicked, setClicked] = useState(false);
  let stylefront = `${styles.containerfront} ${styles.containerfront_unclick}`;
  let styleback = `${styles.containerback} ${styles.containerback_unclick}`;
  const [learntWords, setLearntWords] = useState([]);
  useEffect(() => {
    setClicked(false); // Сбросить состояние clicked при изменении props
  }, [term, transcription, translation]);
  const handleClick = () => {
    console.log("clicked");
    setClicked(true);
    if (!learntWords.includes(term)) {
      setLearntWords([...learntWords, term]);
      onHandleClick(learntWords.length + 1);
    }
  };
  if (clicked) {
    stylefront = `${styles.containerfront} ${styles.containerfront_click}`;
    styleback = `${styles.containerback} ${styles.containerback_click}`;
  }
  return (
    <div className={styles.containermain}>
      <div className={stylefront}>
        <div className={styles.container_words}>
          <p className={styles.term}>{term}</p>
        </div>
        <CardButton onHandleClick={handleClick} newCard={newCard} />
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
export default CardChangeRuEn;
