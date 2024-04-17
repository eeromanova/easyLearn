import React, { useEffect, useState } from "react";
import Item from "../tabitem/Item";
import styles from "./list.module.css";
import TabInput from "../tabitem/TabInput";
import Loader from "../loader/Loader";
import { observer, inject } from "mobx-react";
import TabInputNew from "../tabitem/TabInput copy";
// import ItemNew from "../tabitem/ItemNew";

const WordList = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [wordsUsed, setWordsUsed] = useState([]);

    useEffect(() => {
      wordsStore.getWords();
      setWordsUsed(wordsStore.words);
    }, [wordsStore.isLoading]);

    return (
      <div className={styles.container}>
        <TabInputNew />
        <TabInput />
        {wordsStore.isLoading && <Loader />}
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
  })
);

export default WordList;
