import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./item.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import Edit from "../../assets/image/svg/edit_icon.svg";
import Delete from "../../assets/image/svg/delete_icon.svg";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import ButtonClear from "../button/ClearButton";
import SavedItem from "../savedItem/SavedItem";
import { observer, inject } from "mobx-react";
import useInput from "../../hooks/check-input";

const ItemNew = inject(["wordsStore"])(
  observer((props) => {
    const { term, transcription, translation, id, wordsStore } = props;
    const [change, setChange] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(false);
    const handleClick = (e) => {
      e.preventDefault();
      setChange(!change);
      setIsValid(true);
      setIsEmpty(false);
    };
    const {
      value: termValue,
      isValid: isTermValid,
      isEmpty: isTermEmpty,
      inputChangeHandler: termChangeHandler,
      inputLostFocusHandler: termLostFocusHandler,
      resetValues: termReset,
      styles: termStatus,
    } = useInput(term);

    const {
      value: transcriptionValue,
      isValid: isTranscriptionValid,
      isEmpty: isTranscriptionEmpty,
      inputChangeHandler: transcriptionChangeHandler,
      inputLostFocusHandler: transcriptionLostFocusHandler,
      resetValues: transcriptionReset,
      styles: transcriptionStatus,
    } = useInput(transcription.replace(/[\[\]]/g, ""));

    const {
      value: translationValue,
      isValid: isTranslationValid,
      isEmpty: isTranslationEmpty,
      inputChangeHandler: translationChangeHandler,
      inputLostFocusHandler: translationLostFocusHandler,
      resetValues: translationReset,
      styles: translationStatus,
    } = useInput(translation);


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

      if (
        postTerm !== "" &&
        postTranscription !== "" &&
        postTranslation !== ""
      ) {
        wordsStore.updateWord(id, postTerm, postTranscription, postTranslation);
        setChange(false);
        // wordsStore.getWords();
        // window.location.reload();
      } else {
        checkIsValid();
        checkIsEmpty();
      }
    };
    const onHandleDelete = (e) => {
      e.preventDefault();
      wordsStore.deleteWord(
        id,
        termValue,
        transcriptionValue,
        translationValue
      );
      // window.location.reload();
    };

    return (
      <form onSubmit={onHandleSubmit} className={styles.container}>
        <div className={styles.container_input}>
          {!change ? (
            <>
              <SavedItem content={term} />
              <SavedItem content={transcription} />
              <SavedItem content={translation} />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className={styles.container_buttons}>
          {change ? (
            <Button
              bgcolor="secondary"
              content={Save}
              buttonStatus={buttonStatus}
              type="submit"
            />
          ) : (
            <ButtonClear bgcolor="secondary" />
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
          <Button
            bgcolor="secondary"
            content={Delete}
            buttonStatus={false}
            onHandleClick={onHandleDelete}
          />
        </div>
        <div className={styles.error}>
          {isEmpty && <div>Please, fill all the fields</div>}
          {!isValid && <div>Only letters, please</div>}
        </div>
      </form>
    );
  })
);
export default ItemNew;
