import Input from "../input/Input";
import styles from "./item.module.css";
import Button from "../button/Button";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import Buttonclear from "../button/Buttonclear";
import React from "react";
import { useState } from "react";

function Tabinput(props) {
  const [close, setClose] = useState(false);
  const handleClick = () => {
    setClose(!close);
  };
  return (
    <>
      <div className={styles.container_input}>
        <Input status="open" placeholder="term" />
        <Input status="open" placeholder="transcription" />
        <Input status="open" placeholder="translation" />
      </div>
      <div className={styles.container_buttons}>
        <Button bgcolor="secondary" content={Save} />
        <Button onHandleClick={handleClick} bgcolor="secondary" content={Cancel} />
        <Buttonclear bgcolor="secondary" />
      </div>
    </>
  );
}

export default Tabinput;
