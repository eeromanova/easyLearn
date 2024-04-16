import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./item.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import Edit from "../../assets/image/svg/edit_icon.svg";
import Delete from "../../assets/image/svg/delete_icon.svg";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import ButtonClear from "../button/ButtonClear";
// import {checkInput} from "../../hooks/check-input";

function Item(props) {
  const { term, transcription, translation, id } = props;
  const [statusTerm, setStatusTerm] = useState("saved");
  //новое состояние, показывает статус input'a Term. На данный момент есть три статуса: saved, open, error
  const [statusTranscription, setStatusTranscription] = useState("saved");
  const [statusTranslation, setStatusTranslation] = useState("saved");
  let changing = true;
  const [change, setChange] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [checkTerm, setcheckTerm] = useState(false);
  const [checkTranscription, setcheckTranscription] = useState(false);
  const [checkTranslation, setcheckTranslation] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
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

      // setWordId(words.filter((word)=>word.id).id);
      // console.log(wordId);
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

  const regex = /[0-9\\.,:\]\]]/g;
  let postTerm = "";
  let postTranscription = "";
  let postTranslation = "";
  const onHandleCheckTerm = () => {
    if (regex.test(valueTerm)) {
      setcheckTerm(true);
      setStatusTerm("error");
    } else {
      postTerm = valueTerm.trim().toLowerCase();
    }
  };
  const onHandleCheckTranscription = () => {
    if (regex.test(valueTranscription)) {
      setcheckTranscription(true);
      setStatusTranscription("error");
    } else {
      postTranscription = `[${valueTranscription.trim().toLowerCase()}]`;
    }
  };
  const onHandleCheckTranslation = () => {
    if (regex.test(valueTranslation)) {
      setcheckTranslation(true);
      setStatusTranslation("error");
    } else {
      postTranslation = valueTranslation.trim().toLowerCase();
    }
  };
  const updateData = async (url, id, english, transcription, russian) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        english: english,
        transcription: transcription,
        russian: russian,
        tags: "",
      }),
    });
    const json = await response.json();
    console.log(json);
  };
  const deleteData = async (url, id, english, transcription, russian) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        english: english,
        transcription: transcription,
        russian: russian,
        tags: "",
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onHandleCheckTerm();
    onHandleCheckTranscription();
    onHandleCheckTranslation();
    if (postTerm !== "" && postTranscription !== "" && postTranslation !== "") {
      updateData(
        `/api/words/${id}/update`,
        id,
        postTerm,
        postTranscription,
        postTranslation
      );
      setValueTerm(term);
      console.log(
        `/api/words/${id}/update`,
        postTerm,
        postTranscription,
        postTranslation,
        id
      );
      window.location.reload();
      // setvalueTranscription(transcription);
      // setvalueTranslation(translation);
      // setcheckTerm(false);
      // setcheckTranscription(false);
      // setcheckTranslation(false);
      // setStatusTerm("saved");
      // setStatusTranscription("saved");
      // setStatusTranslation("saved");
    } else {
      if (valueTerm.trim() === "") {
        setStatusTerm("error");
        setIsValid(false);
      }
      if (valueTranscription.trim() === "") {
        setStatusTranscription("error");
        setIsValid(false);
      }
      if (valueTranslation.trim() === "") {
        setStatusTranslation("error");
        setIsValid(false);
      }
    }
  };

  const onHandleDelete = (e) => {
    e.preventDefault();
    deleteData(
      `/api/words/${id}/delete`,
      id,
      valueTerm,
      valueTranscription,
      valueTranslation
    );
    window.location.reload();
  };

  useEffect(() => {
    setValueTerm(term);
    setvalueTranscription(transcription);
    setvalueTranslation(translation);
  }, [change]);

  return (
    <form onSubmit={onHandleSubmit} className={styles.container}>
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
    </form>
  );
}
export default Item;
