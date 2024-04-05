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
import {checkInput} from "../../hooks/check-input";

function Item(props) {
  const { term, transcription, translation } = props;
  let status = "saved";
  let changing = true;
  const [change, setChange] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const handleClick = () => {
    setChange(!change);
  };
  if (change) {
    status = "open";
    changing = false;
  }

  // const {
  //   value: valueTerm,
  //   isValid: isTermValid,
  //   inputChangeHandler: termChangeHandler,
  //   status: status,
  // } = checkInput((value) => {
  //   return value.trim()!=='';
  // }); 

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
      console.log(valueTranslation);
    }
  };
  const onHandleFocus = () => {
    if (
      valueTranscription === "" ||
      valueTerm === "" ||
      valueTranslation === ""
    ) {
      setButtonStatus(true);
      console.log(buttonStatus);
    } else {
      setButtonStatus(false);
      console.log(buttonStatus);
    }
  };
  useEffect(() => {
    setValueTerm(term);
    setvalueTranscription(transcription);
    setvalueTranslation(translation);
  }, [change]);
  const onHandleError = (e) => {
    if (e.target.value === "") {
      status = "error";
      console.log(status);
    } else {
      status = "open"
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.container_input}>
        <Input
          status={status}
          nameInput="term"
          content={valueTerm}
          changing={changing}
          onHandleChange={onHandleChangeTerm}
          onHandleFocus={onHandleFocus}
          // error={error}
          onHandleError={onHandleError}
        />
        <Input
          status={status}
          nameInput="transcription"
          content={valueTranscription}
          changing={changing}
          onHandleChange={onHandleChangeTranscription}
          onHandleFocus={onHandleFocus}
          // error={error}
          onHandleError={onHandleError}
        />
        <Input
          status={status}
          nameInput="translation"
          content={valueTranslation}
          changing={changing}
          onHandleChange={onHandleChangeTranslation}
          onHandleFocus={onHandleFocus}
          // error={error}
          onHandleError={onHandleError}
        />
      </form>
      <div className={styles.container_buttons}>
        {change ? (
          <Button
            bgcolor="secondary"
            content={Save}
            buttonStatus={buttonStatus}
          />
        ) : (
          <Buttonclear bgcolor="secondary" />
        )}
        {change ? (
          <Button
            bgcolor="secondary"
            onHandleClick={handleClick}
            content={Cancel}
            buttonStatus={false}
          />
        ) : (
          <Button
            bgcolor="secondary"
            onHandleClick={handleClick}
            content={Edit}
            buttonStatus={false}
          />
        )}
        <Button bgcolor="secondary" content={Delete} buttonStatus={false} />
      </div>
    </div>
  );
}
export default Item;
