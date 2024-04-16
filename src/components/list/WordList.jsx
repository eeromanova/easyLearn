import React, { useContext, useEffect, useState } from "react";
import Item from "../tabitem/Item";
import styles from "./list.module.css";
import TabInput from "../tabitem/TabInput";
import { WordsContext } from "../WordsContextProvider";
import Loader from "../loader/Loader";
// import ItemNew from "../tabitem/ItemNew";

function WordList() {
  const { words, loading, getWords } = useContext(WordsContext);

  const [wordsUsed, setWordsUsed] = useState([]);


  useEffect(() => {
    getWords();
    setWordsUsed(words);
  }, [loading]);


  console.log(wordsUsed);
  return (
    <div className={styles.container}>
      <TabInput />
      {loading && <Loader />}
      {/* {wordsUsed.map((item) => (
        <ItemNew
          key={item.id}
          term={item.english}
          transcription={item.transcription}
          translation={item.russian}
        />
      ))} */}
      {wordsUsed.map((item) => (
        <Item
          key={item.id}
          term={item.english}
          transcription={item.transcription}
          translation={item.russian}
          id={item.id}
        />
      ))}

    </div>
  );
}
export default WordList;
