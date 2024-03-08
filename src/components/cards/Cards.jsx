import styles from "./cards.module.css";
import Card from "../card/Card";
import Button from "../button/Button";
import Arrowleft from "../../assets/image/svg/arrow_left.svg";
import Arrowright from "../../assets/image/svg/arrow_right.svg";
import data from "../../assets/data/data.json";
import { useState } from "react";
import Buttonclear from "../button/Buttonclear";
import Cardchange from "../card/Cardchange";

function Cards() {
  const [index, setIndex] = useState(0);
  const handleClickRight = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleClickLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  };

  let buttonleft = <Buttonclear />;
  if (index > 0) {
    buttonleft = <Button onHandleClick={handleClickLeft} content={Arrowleft} />;
  }
  return (
    <div className={styles.container}>
      {buttonleft}
      <Cardchange
        term={data[index].english}
        transcription={data[index].transcription}
        translation={data[index].russian}
      />
      <Card
        term={data[index].english}
        transcription={data[index].transcription}
        translation={data[index].russian}
      />
      <Button onHandleClick={handleClickRight} content={Arrowright} />
    </div>
  );
}
export default Cards;
