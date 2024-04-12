import Input from "./Input";
import styles from "./input.module.css";
import { useState } from "react";

function InputTerm(props) {
  const { initialValue, isInputOpened, saveData, status } = props;
  const [value, setValue] = useState(initialValue);
  const onInputChange = (e) => {
    setValue(e.target.value);
    if (e.target.value !== "") {
      saveData(e.target.value);
    }
  };

  // const onHandleFocus = () => {
  //   if (value !== "") {
  //     isValueTermOk(false);
  //   } else {
  //     isValueTermOk(true);
  //   }
  // };

  return (
    <>
      {isInputOpened && (
        <Input
          status={status}
          placeholder="term"
          nameInput="term"
          content={value}
          onHandleChange={onInputChange}
          // onHandleFocus={onHandleFocus}
        />
      )}
    </>
  );
}

export default InputTerm;

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
