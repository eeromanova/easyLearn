import styles from "./item.module.css";
import Button from "../button/Button";
import { useState } from "react";
import Add from "../../assets/image/svg/add_icon.svg";
import Input from "../input/Input";
import ButtonClear from "../button/ClearButton";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import React from "react";
import { observer, inject } from "mobx-react";
import useInput from "../../hooks/check-input";

const TabInput = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const {
      value: termValue,
      isValid: isTermValid,
      isEmpty: isTermEmpty,
      inputChangeHandler: termChangeHandler,
      inputLostFocusHandler: termLostFocusHandler,
      resetValues: termReset,
      styles: termStatus,
    } = useInput("");

    const {
      value: transcriptionValue,
      isValid: isTranscriptionValid,
      isEmpty: isTranscriptionEmpty,
      inputChangeHandler: transcriptionChangeHandler,
      inputLostFocusHandler: transcriptionLostFocusHandler,
      resetValues: transcriptionReset,
      styles: transcriptionStatus,
    } = useInput("");

    const {
      value: translationValue,
      isValid: isTranslationValid,
      isEmpty: isTranslationEmpty,
      inputChangeHandler: translationChangeHandler,
      inputLostFocusHandler: translationLostFocusHandler,
      resetValues: translationReset,
      styles: translationStatus,
    } = useInput("");

    const [input, setInput] = useState(false);

    const [isValid, setIsValid] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const checkIsEmpty = () => {
      if (isTermEmpty || isTranscriptionEmpty || isTranslationEmpty) {
        setIsEmpty(true);
        console.log(isEmpty);
      }
    };
    const checkIsValid = () => {
      if (!isTermValid || !isTranscriptionValid || !isTranslationValid) {
        setIsValid(false);
        console.log(isValid);
      }
    };
    const handleClick = () => {
      setInput(!input);
      setIsValid(true);
    };
    let postTerm = "";
    let postTranscription = "";
    let postTranslation = "";

    const getPostWords = () => {
      if (isTermValid && !isTermEmpty) {
        postTerm = termValue.trim().toLowerCase();
      }
      if (isTranscriptionValid && !isTranscriptionEmpty) {
        postTranscription = `[${transcriptionValue.trim().toLowerCase()}]`;
      }
      if (isTranslationValid && !isTranslationEmpty) {
        postTranslation = translationValue.trim().toLowerCase();
      }
    };

    const onHandleSubmit = (e) => {
      e.preventDefault();
      setIsEmpty(false);
      setIsValid(true);
      getPostWords();
      console.log(postTerm, postTranscription, postTranslation);
      // onHandleCheckTerm();
      // onHandleCheckTranscription();
      // onHandleCheckTranslation();

      if (
        postTerm !== "" &&
        postTranscription !== "" &&
        postTranslation !== ""
      ) {
        wordsStore.addWord(postTerm, postTranscription, postTranslation);
        // window.location.reload();

      } else {
        checkIsValid();
        checkIsEmpty();
      }
    };
    return (
      <>
        {input ? (
          <form onSubmit={onHandleSubmit} className={styles.container}>
            <div className={styles.container_input}>
              <Input
                status={termStatus}
                placeholder="term"
                nameInput="term"
                content={termValue}
                onHandleChange={termChangeHandler}
                onHandleFocus={termLostFocusHandler}
              />
              <Input
                status={transcriptionStatus}
                placeholder="transcription"
                nameInput="transcription"
                content={transcriptionValue}
                onHandleChange={transcriptionChangeHandler}
                onHandleFocus={transcriptionLostFocusHandler}
              />
              <Input
                status={translationStatus}
                placeholder="translation"
                nameInput="translation"
                content={translationValue}
                onHandleChange={translationChangeHandler}
                onHandleFocus={translationLostFocusHandler}
              />
            </div>
            <div className={styles.container_buttons}>
              <Button type="submit" bgcolor="secondary" content={Save} />
              <Button
                onHandleClick={handleClick}
                bgcolor="secondary"
                content={Cancel}
                buttonStatus={false}
              />
              <ButtonClear bgcolor="secondary" />
            </div>
            <div className={styles.error}>
              {isEmpty && <div>Please, fill all the fields</div>}
              {!isValid && <div>Only letters, please</div>}
            </div>
          </form>
        ) : (
          <div className={styles.addButton}>
            <Button
              bgcolor="primary"
              onHandleClick={handleClick}
              content={Add}
              buttonStatus={false}
            />
          </div>
        )}
      </>
    );
  })
);

export default TabInput;
