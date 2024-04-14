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
import SavedItem from "../savedItem/SavedItem";
// import {checkInput} from "../../hooks/check-input";

function ItemNew(props) {
  const { words } = useContext(WordsContext);

  const { term, transcription, translation } = props;
const [change, setChange] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [checkTerm, setcheckTerm] = useState(false);
  const [checkTranscription, setcheckTranscription] = useState(false);
  const [checkTranslation, setcheckTranslation] = useState(false);
  const [input, setInput] = useState(false);
  const [inputTermValue, setInputTermValue] = useState("");
  const [inputTranscriptionValue, setInputTranscriptionValue] = useState("[]");
  const [inputTranslationValue, setInputTranslationValue] = useState("");
  const [statusTerm, setStatusTerm] = useState("open");
  //новое состояние, показывает статус input'a Term. На данный момент есть два статуса в верхнем инпуте: open, error
  const [statusTranscription, setStatusTranscription] = useState("open");
  const [statusTranslation, setStatusTranslation] = useState("open");
  const [isValid, setIsValid] = useState(true);

  const handleClick = () => {
      setChange(!change);}
  // const handleClick = () => {
  //   setInput(!input);
  //   setIsValid(true);
  //   setInputTermValue("");
  //   setInputTranscriptionValue("");
  //   setInputTranslationValue("");
  //   setStatusTerm("open");
  //   setStatusTranscription("open");
  //   setStatusTranslation("open");
  //   setcheckTerm(false);
  //   setcheckTranscription(false);
  //   setcheckTranslation(false);
  // };
  const onInputTermChange = (e) => {
    setInputTermValue(e.target.value);
    setIsValid(true);
    setStatusTerm("open");
    setcheckTerm(false);
  };
  const onInputTranscriptionChange = (e) => {
    setInputTranscriptionValue(e.target.value);
    setIsValid(true);
    setStatusTranscription("open");
    setcheckTranscription(false);
  };
  const onInputTranslationChange = (e) => {
    setInputTranslationValue(e.target.value);
    setIsValid(true);
    setStatusTranslation("open");
    setcheckTranslation(false);
  };
  const regex = /[0-9\\.,:\]\]]/g;
  let postTerm = "";
  let postTranscription = "";
  let postTranslation = "";
  const onHandleCheckTerm = () => {
    if (regex.test(inputTermValue)) {
      setcheckTerm(true);
      setStatusTerm("error");
    } else {
      postTerm = inputTermValue.trim().toLowerCase();
    }
  };
  const onHandleCheckTranscription = () => {
    if (regex.test(inputTranscriptionValue)) {
      setcheckTranscription(true);
      setStatusTranscription("error");
    } else {
      postTranscription = `[${inputTranscriptionValue.trim().toLowerCase()}]`;
    }
  };
  const onHandleCheckTranslation = () => {
    if (regex.test(inputTranslationValue)) {
      setcheckTranslation(true);
      setStatusTranslation("error");
    } else {
      postTranslation = inputTranslationValue.trim().toLowerCase();
    }
  };
  const postData = async (url, id, english, transcription, russian) => {
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
      postData(
        "/api/words/add",
        words.length + 1,
        postTerm,
        postTranscription,
        postTranslation
      );
      setInputTermValue("");
      setInputTranscriptionValue("");
      setInputTranslationValue("");
      setInput(false);
      setcheckTerm(false);
      setcheckTranscription(false);
      setcheckTranslation(false);
    } else {
      if (inputTermValue.trim() === "") {
        setStatusTerm("error");
        setIsValid(false);
      }
      if (inputTranscriptionValue.trim() === "") {
        setStatusTranscription("error");
        setIsValid(false);
      }
      if (inputTranslationValue.trim() === "") {
        setStatusTranslation("error");
        setIsValid(false);
      }
    }
  };

  // const [statusTerm, setStatusTerm] = useState("saved");
  // //новое состояние, показывает статус input'a Term. На данный момент есть три статуса: saved, open, error
  // const [statusTranscription, setStatusTranscription] = useState("saved");
  // const [statusTranslation, setStatusTranslation] = useState("saved");
  // let changing = true;
  // const [change, setChange] = useState(false);
  // const [buttonStatus, setButtonStatus] = useState(false);
  // const [checkTerm, setcheckTerm] = useState(false);
  // const [checkTranscription, setcheckTranscription] = useState(false);
  // const [checkTranslation, setcheckTranslation] = useState(false);
  // const handleClick = () => {
  //   setChange(!change);
  //   if (change) {
  //     setStatusTerm("saved");
  //     setStatusTranscription("saved");
  //     setStatusTranslation("saved");
  //   }
  //   if (!change) {
  //     setStatusTerm("open");
  //     setStatusTranscription("open");
  //     setStatusTranslation("open");
  //   }
  // };
  // if (change) {
  //   changing = false;
  // }

  // const [valueTerm, setValueTerm] = useState(term);
  // const [valueTranscription, setvalueTranscription] = useState(transcription);
  // const [valueTranslation, setvalueTranslation] = useState(translation);
  // const onHandleChangeTerm = (e) => {
  //   if (change) {
  //     setValueTerm(e.target.value);
  //   }
  //   if (e.target.value === "") {
  //     setStatusTerm("error");
  //   }
  //   if (e.target.value !== "") {
  //     setStatusTerm("open");
  //   }
  // };
  // const onHandleChangeTranscription = (e) => {
  //   if (change) {
  //     setvalueTranscription(e.target.value);
  //   }
  //   if (e.target.value === "") {
  //     setStatusTranscription("error");
  //   }
  //   if (e.target.value !== "") {
  //     setStatusTranscription("open");
  //   }
  // };
  // const onHandleChangeTranslation = (e) => {
  //   if (change) {
  //     setvalueTranslation(e.target.value);
  //     console.log(valueTranslation);
  //   }
  //   if (e.target.value === "") {
  //     setStatusTranslation("error");
  //   }
  //   if (e.target.value !== "") {
  //     setStatusTranslation("open");
  //   }
  // };
  // const onHandleFocus = () => {
  //   if (
  //     valueTranscription === "" ||
  //     valueTerm === "" ||
  //     valueTranslation === ""
  //   ) {
  //     setButtonStatus(true);
  //   } else {
  //     setButtonStatus(false);
  //   }
  // };

  // useEffect(() => {
  //   setValueTerm(term);
  //   setvalueTranscription(transcription);
  //   setvalueTranslation(translation);
  // }, [change]);

  return (
    <form className={styles.container}>
      <div className={styles.container_input}>
        {!change?(<><SavedItem content={term}/> <SavedItem content={transcription}/>
        <SavedItem content={translation}/></>):(<><Input
              status={statusTerm}
              placeholder="term"
              nameInput="term"
              content={inputTermValue}
              onHandleChange={onInputTermChange}
            />
            <Input
              status={statusTranscription}
              placeholder="[transcription]"
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
            /></>)}
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

  // return (
  //   <form className={styles.container}>
  //     <div className={styles.container_input}>
  //       <Input
  //         status={statusTerm}
  //         nameInput="term"
  //         content={valueTerm}
  //         changing={changing}
  //         onHandleChange={onHandleChangeTerm}
  //         onHandleFocus={onHandleFocus}
  //       />
  //       <Input
  //         status={statusTranscription}
  //         nameInput="transcription"
  //         content={valueTranscription}
  //         changing={changing}
  //         onHandleChange={onHandleChangeTranscription}
  //         onHandleFocus={onHandleFocus}
  //       />
  //       <Input
  //         status={statusTranslation}
  //         nameInput="translation"
  //         content={valueTranslation}
  //         changing={changing}
  //         onHandleChange={onHandleChangeTranslation}
  //         onHandleFocus={onHandleFocus}
  //       />
  //     </div>
  //     <div className={styles.container_buttons}>
  //       {change ? (
  //         <Button
  //           bgcolor="secondary"
  //           content={Save}
  //           buttonStatus={buttonStatus}
  //         />
  //       ) : (
  //         <Buttonclear bgcolor="secondary" />
  //       )}
  //       {change ? (
  //         <Button
  //           bgcolor="secondary"
  //           onHandleClick={handleClick}
  //           content={Cancel}
  //           buttonStatus={false}
  //         />
  //       ) : (
  //         <Button
  //           bgcolor="secondary"
  //           onHandleClick={handleClick}
  //           content={Edit}
  //           buttonStatus={false}
  //         />
  //       )}
  //       <Button bgcolor="secondary" content={Delete} buttonStatus={false} />
  //     </div>
  //   </form>
  // );
}
export default ItemNew;
