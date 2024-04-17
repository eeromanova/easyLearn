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
import InputTerm from "../input/InputTerm";
import InputTranscription from "../input/InputTranscription";
import InputTranslation from "../input/InputTranslation";

const TabInput = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [input, setInput] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isFormEmpty, setIsFormEmpty] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);
    const [isTermValid, setIsTermValid] = useState(true);
    const [isTermEmpty, setIsTermEmpty] = useState(false);
    const [isTranscriptionValid, setIsTranscriptionValid] = useState(true);
    const [isTranscriptionEmpty, setIsTranscriptionEmpty] = useState(false);
    const [isTranslationValid, setIsTranslationValid] = useState(true);
    const [isTranslationEmpty, setIsTranslationEmpty] = useState(false);
    const [postTerm, setPostTerm] = useState("");
    const [postTranscription, setPostTranscription] = useState("");
    const [postTranslation, setPostTranslation] = useState("");

    const getPostTerm = (value) => {
      setPostTerm(value);
      console.log(postTerm);
    };
    const getValidStatusTerm = (value) => {
      setIsTermValid(value);
      console.log(isTermValid);
    };
    const getEmptyStatusTerm = (value) => {
      setIsTermEmpty(value);
      console.log(isTermEmpty);
    };

    const getPostTranslation = (value) => {
      setPostTranslation(value);
      console.log(postTranslation);
    };
    const getValidStatusTranslation = (value) => {
      setIsTranslationValid(value);
      console.log(isTranslationValid);
    };
    const getEmptyStatusTranslation = (value) => {
      setIsTranslationEmpty(value);
      console.log(isTranslationEmpty);
    };
    const getPostTranscription = (value) => {
      setPostTranscription(value);
      console.log(postTranscription);
    };
    const getValidStatusTranscription = (value) => {
      setIsTranscriptionValid(value);
      console.log(isTranscriptionValid);
    };
    const getEmptyStatusTranscription = (value) => {
      setIsTranscriptionEmpty(value);
      console.log(isTranscriptionEmpty);
    };
    const handleClick = () => {
      setInput(!input);
      setIsSaving(false);
    };

    const checkFormValidity = () => {
      if (
        postTerm !== "" &&
        postTranscription !== "" &&
        postTranslation !== "" 
      ) {
        setIsFormValid(false);
      } else {setIsFormValid(true)};
      console.log(isFormValid);
    };
    const checkFormEmpty = () => {
      if (isTermEmpty || isTranscriptionEmpty || isTranslationEmpty) {
        setIsFormEmpty(true);
      } else {setIsFormEmpty(false)};
    };

    // const handleSave = (e) => {
    //   e.preventDefault();
    //   setIsSaving(true);
    //   getPostTerm();
    //   getValidStatusTerm();
    //   getEmptyStatusTerm();
    //   getPostTranscription();
    //   getValidStatusTranscription();
    //   getEmptyStatusTranscription();
    //   getPostTranslation();
    //   getValidStatusTranslation();
    //   getEmptyStatusTranslation();
    //   console.log(postTerm, postTranscription, postTranslation);
    // };

    const onHandleSubmit = (e) => {
      e.preventDefault();
      setIsSaving(true);
      getPostTerm();
      getValidStatusTerm();
      getEmptyStatusTerm();
      getPostTranscription();
      getValidStatusTranscription();
      getEmptyStatusTranscription();
      getPostTranslation();
      getValidStatusTranslation();
      getEmptyStatusTranslation();
      console.log(postTerm, postTranscription, postTranslation);
      checkFormValidity();
      checkFormEmpty();
      if ( 
        postTerm !== "" &&
        postTranscription !== "" &&
        postTranslation !== "")
       {
        wordsStore.addWord(postTerm, postTranscription, postTranslation);
        window.location.reload();
      } else {
      }
    };
    return (
      <>
        {input ? (
          <form onSubmit={onHandleSubmit} className={styles.container}>
            <div className={styles.container_input}>
              <InputTerm
                initialValue=""
                isInputOpened={input}
                isSaving={isSaving}
                checkedValue={getPostTerm}
                isEmpty={getEmptyStatusTerm}
                isValid={getValidStatusTerm}
              />
              <InputTranscription
                initialValue=""
                isInputOpened={input}
                isSaving={isSaving}
                checkedValue={getPostTranscription}
                isEmpty={getEmptyStatusTranscription}
                isValid={getValidStatusTranscription}
              />
              <InputTranslation
                initialValue=""
                isInputOpened={input}
                isSaving={isSaving}
                checkedValue={getPostTranslation}
                isEmpty={getEmptyStatusTranslation}
                isValid={getValidStatusTranslation}
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
              {isFormEmpty && <div>Please, fill all the fields</div>}
              {!isFormValid && (
                <div>Only letters, please</div>
              )}
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
