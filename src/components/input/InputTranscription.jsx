import Input from "./Input";
import styles from "./input.module.css";
import { useState, useEffect } from "react";

function InputTranscription(props) {
  const {
    initialValue,
    isInputOpened,
    isSaving,
    checkedValue,
    isEmpty,
    isValid,
  } = props;
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState("open");
  const [isInputEmpty, setisInputEmpty] = useState(true);
  const [isInputValid, setisInputValid] = useState(true);
  const onInputChange = (e) => {
    setStatus("open");  
    setValue(e.target.value);
    console.log(value);
    setisInputEmpty(false);
    setisInputValid(true);
  };
  const regex = /[0-9\\.,\]\]]/g;
  let postValue = "";
  const checkInput = () => {
    if (isSaving) {
      if (value !== "" && !regex.test(value)) {
        postValue =`[${value.trim().toLowerCase()}]`;

        console.log(value.trim().toLowerCase());
      } else {
        setStatus("error");
        postValue='';
        if (value === "") {
          setisInputEmpty(true);
        } else {
          setisInputValid(false);
        }
      }
    }
  };

  useEffect(() => {
    checkInput();
    isEmpty(isInputEmpty);
    isValid(isInputValid);
    checkedValue(postValue);
  }, [isSaving]);
  return (
    <>
      {isInputOpened && (
        <Input
          status={status}
          placeholder="transcription"
          nameInput="transcription"
          content={value}
          onHandleChange={onInputChange}
          // onHandleFocus={onHandleFocus}
        />
      )}
    </>
  );
}

export default InputTranscription;

// const TabInput=inject(['wordsStore'])(observer(({ wordsStore }) => {
//     const [checkTerm, setcheckTerm] = useState(false);
//     const [checkTranscription, setcheckTranscription] = useState(false);
//     const [checkTranslation, setcheckTranslation] = useState(false);
//     const [input, setInput] = useState(false);
//     const [inputTermValue, setInputTermValue] = useState("");
//     const [inputTranscriptionValue, setInputTranscriptionValue] = useState("[]");
//     const [inputTranslationValue, setInputTranslationValue] = useState("");
//     const [statusTerm, setStatusTerm] = useState("open");
//     //новое состояние, показывает статус input'a Term. На данный момент есть два статуса в верхнем инпуте: open, error
//     const [statusTranscription, setStatusTranscription] = useState("open");
//     const [statusTranslation, setStatusTranslation] = useState("open");
//     const [isValid, setIsValid] = useState(true);
//     const handleClick = () => {
//       setInput(!input);
//       setIsValid(true);
//       setInputTermValue("");
//       setInputTranscriptionValue("");
//       setInputTranslationValue("");
//       setStatusTerm("open");
//       setStatusTranscription("open");
//       setStatusTranslation("open");
//       setcheckTerm(false);
//       setcheckTranscription(false);
//       setcheckTranslation(false);
//     };
//     const onInputTermChange = (e) => {
//       setInputTermValue(e.target.value);
//       setIsValid(true);
//       setStatusTerm("open");
//       setcheckTerm(false);
//     };
//     const onInputTranscriptionChange = (e) => {
//       setInputTranscriptionValue(e.target.value);
//       setIsValid(true);
//       setStatusTranscription("open");
//       setcheckTranscription(false);
//     };
//     const onInputTranslationChange = (e) => {
//       setInputTranslationValue(e.target.value);
//       setIsValid(true);
//       setStatusTranslation("open");
//       setcheckTranslation(false);
//     };
//     const regex = /[0-9\\.,:\]\]]/g;
//     let postTerm = "";
//     let postTranscription = "";
//     let postTranslation = "";
//     const onHandleCheckTerm = () => {
//       if (regex.test(inputTermValue)) {
//         setcheckTerm(true);
//         setStatusTerm("error");
//       } else {
//         postTerm = inputTermValue.trim().toLowerCase();
//       }
//     };
//     const onHandleCheckTranscription = () => {
//       if (regex.test(inputTranscriptionValue)) {
//         setcheckTranscription(true);
//         setStatusTranscription("error");
//       } else {
//         postTranscription = `[${inputTranscriptionValue.trim().toLowerCase()}]`;
//       }
//     };
//     const onHandleCheckTranslation = () => {
//       if (regex.test(inputTranslationValue)) {
//         setcheckTranslation(true);
//         setStatusTranslation("error");
//       } else {
//         postTranslation = inputTranslationValue.trim().toLowerCase();
//       }
//     };

//     const onHandleSubmit = (e) => {
//       e.preventDefault();
//       onHandleCheckTerm();
//       onHandleCheckTranscription();
//       onHandleCheckTranslation();
//       if (postTerm !== "" && postTranscription !== "" && postTranslation !== "") {
//         wordsStore.addWord(postTerm, postTranscription, postTranslation);
//         window.location.reload();

//         // setInputTermValue("");
//         // setInputTranscriptionValue("");
//         // setInputTranslationValue("");
//         // setInput(false);
//         // setcheckTerm(false);
//         // setcheckTranscription(false);
//         // setcheckTranslation(false);
//       } else {
//         if (inputTermValue.trim() === "") {
//           setStatusTerm("error");
//           setIsValid(false);
//         }
//         if (inputTranscriptionValue.trim() === "") {
//           setStatusTranscription("error");
//           setIsValid(false);
//         }
//         if (inputTranslationValue.trim() === "") {
//           setStatusTranslation("error");
//           setIsValid(false);
//         }
//       }
//     };
//     return (
//       <>
//         {input ? (
//           <form onSubmit={onHandleSubmit} className={styles.container}>
//             <div className={styles.container_input}>
//               <Input
//                 status={statusTerm}
//                 placeholder="term"
//                 nameInput="term"
//                 content={inputTermValue}
//                 onHandleChange={onInputTermChange}
//               />
//               <Input
//                 status={statusTranscription}
//                 placeholder="[transcription]"
//                 nameInput="transcription"
//                 content={inputTranscriptionValue}
//                 onHandleChange={onInputTranscriptionChange}
//               />
//               <Input
//                 status={statusTranslation}
//                 placeholder="translation"
//                 nameInput="translation"
//                 content={inputTranslationValue}
//                 onHandleChange={onInputTranslationChange}
//               />
//             </div>
//             <div className={styles.container_buttons}>
//               <Button type="submit" bgcolor="secondary" content={Save} />
//               <Button
//                 onHandleClick={handleClick}
//                 bgcolor="secondary"
//                 content={Cancel}
//                 buttonStatus={false}
//               />
//               <ButtonClear bgcolor="secondary" />
//             </div>
//             <div className={styles.error}>
//             {!isValid && (
//               <div >Please, fill all the fields</div>
//             )}
//             {(checkTerm || checkTranscription || checkTranslation) && (
//               <div>Only letters, please</div>
//             )}
//             </div>

//           </form>
//         ) : (
//           <div className={styles.addButton}>
//             <Button
//               bgcolor="primary"
//               onHandleClick={handleClick}
//               content={Add}
//               buttonStatus={false}
//             />
//           </div>
//         )}
//       </>

//     );

//   }));

//   export default TabInput;
