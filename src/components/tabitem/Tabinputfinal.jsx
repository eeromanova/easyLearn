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
  const [isValid, setIsValid] = useState(true);
  const handleClick = () => {
    setInput(!input);
    setIsValid(true);
    setInputTermValue("");
    setInputTranscriptionValue("");
    setInputTranslationValue("");
  };
  const onInputTermChange = (e) => {
    setInputTermValue(e.target.value);
    setIsValid(true);
  };
  const onInputTranscriptionChange = (e) => {
    setInputTranscriptionValue(e.target.value);
    setIsValid(true);
  };
  const onInputTranslationChange = (e) => {
    setInputTranslationValue(e.target.value);
    setIsValid(true);
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
    }
  };
  return (
    <>
      <form onSubmit={onHandleSubmit} className={styles.container}>
        {input ? (
          <>
            <div className={styles.container_input}>
              <Input
                status="open"
                placeholder="term"
                nameInput="term"
                content={inputTermValue}
                onHandleChange={onInputTermChange}
              />
              <Input
                status="open"
                placeholder="transcription"
                nameInput="transcription"
                content={inputTranscriptionValue}
                onHandleChange={onInputTranscriptionChange}
              />
              <Input
                status="open"
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
          <div className={styles.error}>Please, fill all the fields</div>
        )}
      </form>
      {/* {!isValid && <div className={styles.error}>Please, fill all the fields</div>} */}
    </>
  );
}

export default Tabinputfinal;
