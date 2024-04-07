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
  const [inputTermValue, setInputTermValue] = useState("");
  const [inputTranscriptionValue, setInputTranscriptionValue] = useState("");
  const [inputTranslationValue, setInputTranslationValue] = useState("");
  const [statusTerm, setStatusTerm] = useState("open"); 
  //новое состояние, показывает статус input'a Term. На данный момент есть два статуса в верхнем инпуте: open, error
  const [statusTranscription, setStatusTranscription] = useState("open");
  const [statusTranslation, setStatusTranslation] = useState("open");
  const [isValid, setIsValid] = useState(true);
  const handleClick = () => {
    setInput(!input);
    setIsValid(true);
    setInputTermValue("");
    setInputTranscriptionValue("");
    setInputTranslationValue("");
    setStatusTerm("open");
    setStatusTranscription("open");
    setStatusTranslation("open");

  };
  const onInputTermChange = (e) => {
    setInputTermValue(e.target.value);
    setIsValid(true);
    setStatusTerm("open");
  };
  const onInputTranscriptionChange = (e) => {
    setInputTranscriptionValue(e.target.value);
    setIsValid(true);
    setStatusTranscription("open");
  };
  const onInputTranslationChange = (e) => {
    setInputTranslationValue(e.target.value);
    setIsValid(true);
    setStatusTranslation("open");
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      inputTermValue.trim() !== "" &&
      inputTranscriptionValue.trim() !== "" &&
      inputTranslationValue.trim() !== ""
    ) {
      console.log([
        inputTermValue,
        inputTranscriptionValue,
        inputTranslationValue,
      ]);
      setInputTermValue("");
      setInputTranscriptionValue("");
      setInputTranslationValue("");
      setInput(false);
    } else {
      setIsValid(false);
      if (inputTermValue.trim() === "") {setStatusTerm("error");}
      if (inputTranscriptionValue.trim() === "") {setStatusTranscription("error");}
      if (inputTranslationValue.trim() === "") {setStatusTranslation("error");}
    }
  };
  return (
    <>
      <form onSubmit={onHandleSubmit} className={styles.container}>
        {input ? (
          <>
            <div className={styles.container_input}>
              <Input
                status={statusTerm}
                placeholder="term"
                nameInput="term"
                content={inputTermValue}
                onHandleChange={onInputTermChange}
              />
              <Input
                status={statusTranscription}
                placeholder="transcription"
                nameInput="transcription"
                content={inputTranscriptionValue}
                onHandleChange={onInputTranscriptionChange}
              />
              <Input
                status={statusTranslation}
                placeholder="translation"
                nameInput="translation"
                content={inputTranslationValue}
                onHandleChange={onInputTranslationChange}
              />
            </div>
            <div className={styles.container_buttons}>
              <Button bgcolor="secondary" content={Save} />
              <Button
                onHandleClick={handleClick}
                bgcolor="secondary"
                content={Cancel}
                buttonStatus={false}
              />
              <Buttonclear bgcolor="secondary" />
            </div>
          </>
        ) : (
          <Button
            bgcolor="secondary"
            onHandleClick={handleClick}
            content={Add}
            buttonStatus={false}
          />
        )}
        {!isValid && (
          <div className={styles.error}>Please, fill all the fields!</div>
        )}
      </form>
      {/* {!isValid && <div className={styles.error}>Please, fill all the fields</div>} */}
    </>
  );
}

export default Tabinputfinal;
