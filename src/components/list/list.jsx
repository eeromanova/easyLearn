import React, { useContext, useEffect, useState } from "react";
import data from "../../assets/data/data.json";
import Item from "../tabitem/Item";
import styles from "./list.module.css";
import Tabinputfinal from "../tabitem/Tabinputfinal";
import MainInput from "../tabitem/MainInput";
import { WordsContext } from "../WordsContextProvider";
import Loader from "../loader/Loader";

function List() {
  const { words, loading, getWords } = useContext(WordsContext);

  const [wordsUsed, setWordsUsed] = useState([]);

  useEffect(() => {
    getWords();
    setWordsUsed(words);
  }, [loading]);

  console.log(wordsUsed);
  return (
    <div className={styles.container}>
      <Tabinputfinal />
      <MainInput />
      {loading && <Loader />}
      {wordsUsed.map((item) => (
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

