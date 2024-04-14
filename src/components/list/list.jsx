import React, { useContext, useEffect, useState } from "react";
import data from "../../assets/data/data.json";
import Item from "../tabitem/Item";
import styles from "./list.module.css";
import Tabinputfinal from "../tabitem/Tabinputfinal";
import { WordsContext } from "../WordsContextProvider";
import Loader from "../loader/Loader";
import ItemNew from "../tabitem/ItemNew";

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
      {loading && <Loader />}
      {wordsUsed.map((item) => (
        <ItemNew
          key={item.id}
          term={item.english}
          transcription={item.transcription}
          translation={item.russian}
        />
      ))}
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

/* {data.map((item) => (
      <Item
        key={item.id}
        term={item.english}
        transcription={item.transcription}
        translation={item.russian}
      />
    ))} */
