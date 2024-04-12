import styles from "./item.module.css";
import Button from "../button/Button";
import { useState, useContext } from "react";
import Add from "../../assets/image/svg/add_icon.svg";
import Buttonclear from "../button/Buttonclear";
import Save from "../../assets/image/svg/save_icon.svg";
import Cancel from "../../assets/image/svg/cancel_icon.svg";
import React from "react";
import InputTerm from "../input/InputTerm";
import InputTranscription from "../input/InputTranscription";
import { WordsContext } from "../WordsContextProvider";

function MainInput() {
  const { words } = useContext(WordsContext);
  const [inputOpened, setInputOpened] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [valueTerm, setValueTerm] = useState("");
  const [valueTranscription, setValueTranscription] = useState("");
  const [statusTerm, setStatusTerm] = useState("");
  const [statusTranscprition, setStatusTranscprition] = useState("");

  const [savedTranscription, setSavedTranscription] = useState("");
  const [savedTranslation, setSavedTranslation] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setInputOpened(!inputOpened);
    setInitialValue("");
    setIsEmpty(false);
    setStatusTerm("");
    setStatusTranscprition("");
    setIsChecked(true);
  };
  const getTerm = (value) => {
    setValueTerm(value);
    console.log(valueTerm);
  };
  const getTranscription = (value) => {
    setValueTranscription(value);
    console.log(valueTerm);
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
  // const checkEmpty = () => {
  //   if (valueTerm !== "") {
  //     setIsEmpty(true);
  //     setStatusTerm("error");
  //   }
  // };
  let postTerm='';
  let postTranscription;
  const regex = /[0-9\\.,:\]\]]/g;
  const onHandleCheckTerm = () => {
    if (valueTerm !== "" && !regex.test(valueTerm)) {
      postTerm = valueTerm.trim().toLowerCase();
      console.log(postTerm);
    } else {
      setStatusTerm("error");
      postTerm = "";
      if (valueTerm === "") {
        setIsEmpty(true);
      }
      if (regex.test(valueTerm)) {
        setIsChecked(false);
      }
    }
  };
  const onHandleCheckTranscription = () => {
    if (valueTranscription === "") {
      setIsEmpty(true);
      setStatusTranscprition("error");
      postTranscription = "";
      return postTranscription;
    } else if (regex.test(valueTranscription)) {
      setStatusTranscprition("error");
      setIsChecked(false);
      postTranscription = "";
      return postTranscription;
    } else {
      postTranscription = valueTranscription.trim().toLowerCase();
      return postTranscription;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    getTerm();
    onHandleCheckTerm();
    onHandleCheckTranscription();
    if (postTerm !== "") {
      postData(
        "/api/words/add",
        words.length + 1,
        postTerm,
        postTranscription
        // postTranslation
      );
      setInitialValue("");
      setInputOpened(false);
    } else {
    }
  };

  return (
    <>
      {inputOpened ? (
        <form onSubmit={onHandleSubmit} className={styles.container}>
          <div className={styles.container_input}>
            <InputTerm
              initialValue={initialValue}
              isInputOpened={inputOpened}
              saveData={getTerm}
              status={statusTerm}
            />
            <InputTranscription
              initialValue={initialValue}
              isInputOpened={inputOpened}
              saveData={getTranscription}
              status={statusTranscprition}
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
            <Buttonclear bgcolor="secondary" />
          </div>
          <div>
            {isEmpty && (
              <div className={styles.error}>Please, fill all the fields</div>
            )}
            {!isChecked && (
              <div className={styles.error}>Only letters, please</div>
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
}

export default MainInput;
// const [checkTerm, setcheckTerm] = useState(false);
// const [checkTranscription, setcheckTranscription] = useState(false);
// const [checkTranslation, setcheckTranslation] = useState(false);
// const [input, setInput] = useState(false);
// const [inputTermValue, setInputTermValue] = useState("");
// const [inputTranscriptionValue, setInputTranscriptionValue] = useState("[]");
// const [inputTranslationValue, setInputTranslationValue] = useState("");
// const [statusTerm, setStatusTerm] = useState("open");
// //новое состояние, показывает статус input'a Term. На данный момент есть два статуса в верхнем инпуте: open, error
// const [statusTranscription, setStatusTranscription] = useState("open");
// const [statusTranslation, setStatusTranslation] = useState("open");
// const [isValid, setIsValid] = useState(true);
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
// const onInputTermChange = (e) => {
//   setInputTermValue(e.target.value);
//   setIsValid(true);
//   setStatusTerm("open");
//   setcheckTerm(false);
// };
// const onInputTranscriptionChange = (e) => {
//   setInputTranscriptionValue(e.target.value);
//   setIsValid(true);
//   setStatusTranscription("open");
//   setcheckTranscription(false);
// };
// const onInputTranslationChange = (e) => {
//   setInputTranslationValue(e.target.value);
//   setIsValid(true);
//   setStatusTranslation("open");
//   setcheckTranslation(false);
// };
// const regex = /[0-9\\.,:\]\]]/g;
// let postTerm = "";
// let postTranscription = "";
// let postTranslation = "";
// const onHandleCheckTerm = () => {
//   if (regex.test(inputTermValue)) {
//     setcheckTerm(true);
//     setStatusTerm("error");
//   } else {
//     postTerm = inputTermValue.trim().toLowerCase();
//   }
// };
// const onHandleCheckTranscription = () => {
//   if (regex.test(inputTranscriptionValue)) {
//     setcheckTranscription(true);
//     setStatusTranscription("error");
//   } else {
//     postTranscription = `[${inputTranscriptionValue.trim().toLowerCase()}]`;
//   }
// };
// const onHandleCheckTranslation = () => {
//   if (regex.test(inputTranslationValue)) {
//     setcheckTranslation(true);
//     setStatusTranslation("error");
//   } else {
//     postTranslation = inputTranslationValue.trim().toLowerCase();
//   }
// };
// const postData = async (url, id, english, transcription, russian) => {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       id: id,
//       english: english,
//       transcription: transcription,
//       russian: russian,
//     }),
//   });
//   const json = await response.json();
//   console.log(json);
// };

// const onHandleSubmit = (e) => {
//   e.preventDefault();
//   onHandleCheckTerm();
//   onHandleCheckTranscription();
//   onHandleCheckTranslation();
//   if (postTerm !== "" && postTranscription !== "" && postTranslation !== "") {
//     postData(
//       "/api/words/add",
//       words.length + 1,
//       postTerm,
//       postTranscription,
//       postTranslation
//     );
//     setInputTermValue("");
//     setInputTranscriptionValue("");
//     setInputTranslationValue("");
//     setInput(false);
//     setcheckTerm(false);
//     setcheckTranscription(false);
//     setcheckTranslation(false);
//   } else {
//     if (inputTermValue.trim() === "") {
//       setStatusTerm("error");
//       setIsValid(false);
//     }
//     if (inputTranscriptionValue.trim() === "") {
//       setStatusTranscription("error");
//       setIsValid(false);
//     }
//     if (inputTranslationValue.trim() === "") {
//       setStatusTranslation("error");
//       setIsValid(false);
//     }
//   }
// };
// return (
//   <>
//     {input ? (
//       <form onSubmit={onHandleSubmit} className={styles.container}>
//         <div className={styles.container_input}>
//           <Input
//             status={statusTerm}
//             placeholder="term"
//             nameInput="term"
//             content={inputTermValue}
//             onHandleChange={onInputTermChange}
//           />
//           <Input
//             status={statusTranscription}
//             placeholder="[transcription]"
//             nameInput="transcription"
//             content={inputTranscriptionValue}
//             onHandleChange={onInputTranscriptionChange}
//           />
//           <Input
//             status={statusTranslation}
//             placeholder="translation"
//             nameInput="translation"
//             content={inputTranslationValue}
//             onHandleChange={onInputTranslationChange}
//           />
//         </div>
//         <div className={styles.container_buttons}>
//           <Button type="submit" bgcolor="secondary" content={Save} />
//           <Button
//             onHandleClick={handleClick}
//             bgcolor="secondary"
//             content={Cancel}
//             buttonStatus={false}
//           />
//           <Buttonclear bgcolor="secondary" />
//         </div>
//         <div className={styles.error}>
//         {!isValid && (
//           <div >Please, fill all the fields</div>
//         )}
//         {(checkTerm || checkTranscription || checkTranslation) && (
//           <div>Only letters, please</div>
//         )}
//         </div>

//       </form>
//     ) : (
//       <div className={styles.addButton}>
//         <Button
//           bgcolor="primary"
//           onHandleClick={handleClick}
//           content={Add}
//           buttonStatus={false}
//         />
//       </div>
//     )}
// </>
//
