import styles from "./cards.module.css";
import Button from "../button/Button";
import Arrowleft from "../../assets/image/svg/arrow_left.svg";
import Arrowright from "../../assets/image/svg/arrow_right.svg";
import { useState, useContext, useEffect } from "react";
import ButtonClear from "../button/ClearButton";
import CardChange from "../card/Card";
import CardChangeRuEn from "../card/CardRuEn";
import Change from "../../assets/image/svg/change_icon.svg";
import Loader from "../loader/Loader";
import { observer, inject } from 'mobx-react';

const Cards=inject(['wordsStore'])(observer(({ wordsStore }) => {


  const [wordsUsed, setWordsUsed] = useState([]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [newCard, setNewCard] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    wordsStore.getWords();
    setWordsUsed(wordsStore.words);
  }, [wordsStore.isLoading]);

  console.log(wordsUsed);
  if (wordsStore.isLoading || wordsUsed.length === 0) {
    return <Loader />;
  }

  const handleClickRight = () => {
    if (index < wordsUsed.length - 1) {
      setIndex(index + 1);
      setNewCard(index);
    } else {
      setIndex(0);
      setNewCard(index);
    }
  };
  const handleClickLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
      setNewCard(index);
    } else {
      setIndex(0);
      setNewCard(index);
    }
  };

  const handleClickChange = () => {
    setChange(!change);
    setCount(0);
  };
  const handleCount = (numbers) => {
    setCount(numbers);
  };

  let buttonleft = <ButtonClear bgcolor="primary" />;
  if (index > 0) {
    buttonleft = (
      <Button
        bgcolor="primary"
        onHandleClick={handleClickLeft}
        content={Arrowleft}
        buttonStatus={false}
      />
    );
  }
  return (
    <div className={styles.container}>
      {wordsStore.isLoading && <Loader />}
      <div className={styles.changecontainer}>
        {change ? (
          <p className={styles.lang}>ru</p>
        ) : (
          <p className={styles.lang}>eng</p>
        )}
        <Button
          bgcolor="primary"
          onHandleClick={handleClickChange}
          content={Change}
          buttonStatus={false}
        />
        {change ? (
          <p className={styles.lang}>eng</p>
        ) : (
          <p className={styles.lang}>ru</p>
        )}
      </div>
      <div className={styles.cardcontainer}>
        {buttonleft}
        {change ? (
          <CardChangeRuEn
            term={wordsUsed[index].russian}
            transcription={wordsUsed[index].transcription}
            translation={wordsUsed[index].english}
            onHandleClick={handleCount}
            newCard={newCard}
          />
        ) : (
          <CardChange
            term={wordsUsed[index].english}
            transcription={wordsUsed[index].transcription}
            translation={wordsUsed[index].russian}
            onHandleClick={handleCount}
            newCard={newCard}
          />
        )}

        <Button
          bgcolor="primary"
          onHandleClick={handleClickRight}
          content={Arrowright}
          buttonStatus={false}
        />
      </div>
      {count ? (
        <p className={styles.count}>
          Checked: {count}/{wordsUsed.length}
        </p>
      ) : (
        ""
      )}
      {count === wordsUsed.length ? (
        <p className={styles.info}>You have checked all the words</p>
      ) : (
        ""
      )}
    </div>
  );
}));

export default Cards;
