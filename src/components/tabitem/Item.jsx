import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./item.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import Edit from "../../assets/image/svg/edit_icon.svg";
import Delete from "../../assets/image/svg/delete_icon.svg";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import Buttonclear from "../button/Buttonclear";
import { WordsContext } from "../WordsContextProvider";
// import {checkInput} from "../../hooks/check-input";

function Item(props) {
  const {words}=useContext(WordsContext);
  const { term, transcription, translation } = props;
  const [statusTerm, setStatusTerm] = useState("saved"); 
  //новое состояние, показывает статус input'a Term. На данный момент есть три статуса: saved, open, error
  const [statusTranscription, setStatusTranscription] = useState("saved");
  const [statusTranslation, setStatusTranslation] = useState("saved");
  let changing = true;
  const [change, setChange] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [checkTerm, setcheckTerm] = useState(false);
  const [checkTranscription, setcheckTranscription] = useState(false);
  const [checkTranslation, setcheckTranslation] = useState(false);
  const handleClick = () => {
    setChange(!change);
    if (change) {
      setStatusTerm("saved");
      setStatusTranscription("saved");
      setStatusTranslation("saved");
    }
    if (!change) {
      setStatusTerm("open");
      setStatusTranscription("open");
      setStatusTranslation("open");
    }
  };
  if (change) {
    changing = false;
  }

  const [valueTerm, setValueTerm] = useState(term);
  const [valueTranscription, setvalueTranscription] = useState(transcription);
  const [valueTranslation, setvalueTranslation] = useState(translation);
  const onHandleChangeTerm = (e) => {
    if (change) {
      setValueTerm(e.target.value);
    }
    if (e.target.value === "") {
      setStatusTerm("error");
    }
    if (e.target.value !== "") {
      setStatusTerm("open");
    }
  };
  const onHandleChangeTranscription = (e) => {
    if (change) {
      setvalueTranscription(e.target.value);
    }
    if (e.target.value === "") {
      setStatusTranscription("error");
    }
    if (e.target.value !== "") {
      setStatusTranscription("open");
    }
  };
  const onHandleChangeTranslation = (e) => {
    if (change) {
      setvalueTranslation(e.target.value);
      console.log(valueTranslation);
    }
    if (e.target.value === "") {
      setStatusTranslation("error");
    }
    if (e.target.value !== "") {
      setStatusTranslation("open");
    }
  };
  const onHandleFocus = () => {
    if (
      valueTranscription === "" ||
      valueTerm === "" ||
      valueTranslation === ""
    ) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };


  useEffect(() => {
    setValueTerm(term);
    setvalueTranscription(transcription);
    setvalueTranslation(translation);
  }, [change]);

  return (
    <form className={styles.container}>
      <div className={styles.container_input}>
        <Input
          status={statusTerm}
          nameInput="term"
          content={valueTerm}
          changing={changing}
          onHandleChange={onHandleChangeTerm}
          onHandleFocus={onHandleFocus}
        />
        <Input
          status={statusTranscription}
          nameInput="transcription"
          content={valueTranscription}
          changing={changing}
          onHandleChange={onHandleChangeTranscription}
          onHandleFocus={onHandleFocus}
        />
        <Input
          status={statusTranslation}
          nameInput="translation"
          content={valueTranslation}
          changing={changing}
          onHandleChange={onHandleChangeTranslation}
          onHandleFocus={onHandleFocus}
        />
      </div>
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
    </form>
  );
}
export default Item;
