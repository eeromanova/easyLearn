import React from "react";
import { useState, useEffect } from "react";
import styles from "./item.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import Edit from "../../assets/image/svg/edit_icon.svg";
import Delete from "../../assets/image/svg/delete_icon.svg";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import Buttonclear from "../button/Buttonclear";

function Item(props) {
  const { term, transcription, translation } = props;
  let status = "saved";
  let changing = true;
  let buttonSave = <Buttonclear />;
  const [change, setChange] = useState(false);
  const handleClick = () => {
    setChange(!change);
  };

  let buttonEditCancel = <Button onHandleClick={handleClick} content={Edit} />;
  if (change) {
    buttonEditCancel = <Button onHandleClick={handleClick} content={Cancel} />;
    buttonSave = <Button content={Save} />;
    status = "open";
    changing = false;
    console.log(changing);
  }

  const [valueTerm, setValueTerm] = useState(term);
  const [valueTranscription, setvalueTranscription] = useState(transcription);
  const [valueTranslation, setvalueTranslation] = useState(translation);
  const onHandleChangeTerm = (e) => {
    if (change) {
      setValueTerm(e.target.value);
    }
  };
  const onHandleChangeTranscription = (e) => {
    if (change) {
      setvalueTranscription(e.target.value);
    }
  };
  const onHandleChangeTranslation = (e) => {
    if (change) {
      setvalueTranslation(e.target.value);
    }
  };

  useEffect(() => {
    setValueTerm(term);
    setvalueTranscription(transcription);
    setvalueTranslation(translation);
  }, [change]);

  return (
    <div className={styles.container}>
      <div className={styles.container_input}>
        <Input
          status={status}
          content={valueTerm}
          changing={changing}
          onHandleChange={onHandleChangeTerm}
        />
        <Input
          status={status}
          content={valueTranscription}
          changing={changing}
          onHandleChange={onHandleChangeTranscription}
        />
        <Input
          status={status}
          content={valueTranslation}
          changing={changing}
          onHandleChange={onHandleChangeTranslation}
        />
      </div>
      <div className={styles.container_buttons}>
        {/* {buttonCancel} */}
        {buttonSave}
        {buttonEditCancel}
        {/* <Button onHandleClick={handleClick} content={Edit} /> */}
        <Button content={Delete} />
      </div>
    </div>
  );
}
export default Item;
