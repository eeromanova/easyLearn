import React from "react";
import { useState, useEffect } from "react";
import styles from "./card.module.css";
import Cardbutton from "../cardbutton/Cardbutton";

import openai from "openai";

// const configuration = new openai.Configuration({
//   apiKey: process.env.REACT_APP_API_KEY
// });

function Cardchange(props) {
  // const [userPrompt, setUserPrompt] = useState('');
  // const generateImage = async () => {
  //   const imageParameters = {
  //     prompt: userPrompt,
  //     size: '100x100'
  //   };

  //   const response = await openai.createImage(imageParameters);
  //   const imageUrl = response.data.images[0].url;

  //   // if (imageUrl) {
  //   //   setImageUrl(imageUrl);
  //   // }
  // };

  const { term, transcription, translation, onHandleClick, newCard } = props;
  const [clicked, setClicked] = useState(false);
  let stylefront = `${styles.containerfront} ${styles.containerfront_unclick}`;
  let styleback = `${styles.containerback} ${styles.containerback_unclick}`;
  const [learntWords, setLearntWords] = useState([]);
  // let learntWords = [];
  // const countLearntWords = () => {
  //   if (!learntWords.includes(term)) {
  //     learntWords=[...learntWords, term];
  //   }
  //   return learntWords;
  // };

  // let checkedWords=learntWords.length;
  const handleClick = () => {
    setClicked(true);
    if (!learntWords.includes(term)) {
      setLearntWords([...learntWords, term]);
      onHandleClick(learntWords.length + 1);
    }
    console.log(learntWords);
    // onHandleClick(checkedWords);
  };
  useEffect(() => {
    setClicked(false); // Сбросить состояние clicked при изменении props
  }, [term, transcription, translation]);
  if (clicked) {
    stylefront = `${styles.containerfront} ${styles.containerfront_click}`;
    styleback = `${styles.containerback} ${styles.containerback_click}`;
  }
  return (
    <div className={styles.containermain}>
      <div className={stylefront}>
        <div className={styles.container_words}>
          <p className={styles.term}>{term}</p>
          <p className={styles.transcript}>{transcription}</p>
        </div>
        <Cardbutton onHandleClick={handleClick} newCard={newCard} />
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
