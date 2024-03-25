import styles from "./cards.module.css";
// import Card from "../card/Card";
import Button from "../button/Button";
import Arrowleft from "../../assets/image/svg/arrow_left.svg";
import Arrowright from "../../assets/image/svg/arrow_right.svg";
import data from "../../assets/data/data.json";
import { useState } from "react";
import Buttonclear from "../button/Buttonclear";
import Cardchange from "../card/Cardchange";
import Cardchangeruen from "../card/Cardchangeruen";
import Change from "../../assets/image/svg/change_icon.svg";

function Cards() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [newCard, setNewCard] = useState("");
  const handleClickRight = () => {
    if (index < data.length - 1) {
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
  const [change, setChange] = useState(false);
  const handleClickChange = () => {
    setChange(!change);
  };
  const handleCount = (numbers) => {
    setCount(numbers);
  };

  let buttonleft = <Buttonclear bgcolor="primary" />;
  if (index > 0) {
    buttonleft = (
      <Button
        bgcolor="primary"
        onHandleClick={handleClickLeft}
        content={Arrowleft}
      />
    );
  }
  return (
    <div className={styles.container}>
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
          <Cardchangeruen
            term={data[index].russian}
            transcription={data[index].transcription}
            translation={data[index].english}
            onHandleClick={handleCount}
            newCard={newCard}
          />
        ) : (
          <Cardchange
            term={data[index].english}
            transcription={data[index].transcription}
            translation={data[index].russian}
            onHandleClick={handleCount}
            newCard={newCard}
          />
        )}

        <Button
          bgcolor="primary"
          onHandleClick={handleClickRight}
          content={Arrowright}
        />
      </div>
      {count ? <p className={styles.count}>Checked: {count}/{data.length}</p> : ""}
      {count===data.length? <p className={styles.info}>You have checked all the words</p> : ""}
    </div>
  );
}
export default Cards;
