import React from "react";
import { useState } from "react";
import styles from "./item.module.css";
import Input from "../input/Input";
// import Buttonsave from "../button/Buttonsave";
import Button from "../button/Button";
import Edit from "../../assets/image/svg/edit_icon.svg";
import Delete from "../../assets/image/svg/delete_icon.svg";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";

function Item(props) {
  const { term, transcription, translation } = props;
  let status = "saved";
  let changing = true;
  const [change, setChange] = useState(false);
  const handleClick = () => {
    setChange(true);
  };
  const [cancel, setCancel] = useState(false);
  const handleCancel = () => {
    setCancel(true);
  };
  let buttonSave;
  let buttonCancel;
  // let inputTerm=<Input status={status} content={term} changing={changing}/>;
  // let inputTranscription=<Input status={status} content={transcription} changing={changing} />
  // let inputTranslation=<Input status={status} content={translation} changing={changing}/>
  if (change) {
    buttonCancel = <Button onHandleClick={handleCancel} content={Cancel} />;
    buttonSave = <Button content={Save} />;
    status = "open";
    changing = false;
  }
  if (cancel) {
    buttonSave = "";
    buttonCancel = "";
    status = "saved";
    changing = true;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_input}>
        <Input status={status} content={term} changing={changing}/>
        <Input status={status} content={transcription} changing={changing}/>
        <Input status={status} content={translation} changing={changing}/>
      </div>
      <div className={styles.container_buttons}>
        {buttonCancel}
        {buttonSave}
        <Button onHandleClick={handleClick} content={Edit} />
        <Button content={Delete} />
      </div>
    </div>
  );
}
export default Item;
