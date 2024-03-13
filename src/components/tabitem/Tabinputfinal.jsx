import styles from "./item.module.css";
import Button from "../button/Button";
import { useState } from "react";
import Add from "../../assets/image/svg/add_icon.svg";
import Input from "../input/Input";
import Buttonclear from "../button/Buttonclear";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import React from "react";

function Tabinputfinal() {
  const [input, setInput] = useState(false);
  const handleClick = () => {
    setInput(!input);
  };
  return (
    <div className={styles.container}>
      {input ? (
        <>
          <div className={styles.container_input}>
            <Input status="open" placeholder="term" />
            <Input status="open" placeholder="transcription" />
            <Input status="open" placeholder="translation" />
          </div>
          <div className={styles.container_buttons}>
            <Button bgcolor="secondary" content={Save} />
            <Button
              onHandleClick={handleClick}
              bgcolor="secondary"
              content={Cancel}
            />
            <Buttonclear bgcolor="secondary" />
          </div>
        </>
      ) : (
        <Button bgcolor="secondary" onHandleClick={handleClick} content={Add} />
      )}
    </div>
  );
}

export default Tabinputfinal;
