// import Input from "./Input";
import styles from "./input.module.css";
import { useState, useEffect } from "react";


function InputTerm(props) {
  const {
    // initialValue,
    isInputOpened,
    // isSaving,
    // checkedValue,
    // isEmpty,
    // isValid,
    onHandleChange,
  } = props;

  const [value, setValue] = useState(""); //здесь хранится то, что написал пользователь
  const [err, setErr] = useState({ isErr: false, text: "", status: "open" }); //состояние ошибки. В ней 1) есть ли ошибка в инпуте? По умолчанию нет 2) текст ошибки (он может меняться) 3) статус для стилей
  const onHandleImput = (event) => {
    //все изменения, которые вносит пользователь принимаются этой фукнцией и записываются в состояние value, при этом если бо ввода любого дополнительного символа поле было с ошибкой (красное), оно меняется и статус ошибки пропадает
    //запускается onChange на импуте
    setErr((prevState) => ({
      ...prevState,
      isErr: false,
      text: "",
      status: "open",
    }));
    //меням ошибку на неошибку
    setValue(event.target.value);
    //сохраняем состояние
  };
  const regex = /[0-9\\.,\]\]]/g;
  //твоя регулярка
  const onHandleBlureFocus = () => {
    //тут самое интересное. Эта функция вызывает функцию родителя, но только в том случае, если все валидно. если не валидно - меняется состояние ошибки, обрати внимание на текст
    //эта фукнция срабатывает только в том случае, если пользователь что-то писал и перевел мышку на другой элемент
    if (value === "") {
      setErr((prevState) => ({
        ...prevState,
        isErr: true,
        text: "field is still empty",
        status: "error",
      }));
    } else if (regex.test(value)) {
      setErr((prevState) => ({
        ...prevState,
        isErr: true,
        text: "only letters allowed",
        status: "error",
      }));
    } else {
      //если все ок - то ошибка пропадает и данные передаются родителю
      setErr((prevState) => ({
        ...prevState,
        isErr: false,
        text: "",
        status: "open",
      }));
      onHandleChange(true, value.trim().toLowerCase());
      console.log(err, value);
    }
  };
  const classInput = `${styles.input} ${styles[err.status]}`; //в стилях все без изменений

  return (
    <>
      {isInputOpened && (
        <div className={styles.inputWrapper}>
          <input
            className={classInput}
            placeholder="term"
            // nameInput="translation"
            id="term"
            // onHandleChange={onHandleChange}
            onChange={onHandleImput}
            onBlur={onHandleBlureFocus}
            // onHandleFocus={onHandleFocus}
          />
          {err.isErr && <label className={styles.error_text} htmlFor="term">{err.text}</label>}
        </div>
      )}    </>
  );
}

export default InputTerm;


// function InputTerm(props) {
//   const {
//     initialValue,
//     isInputOpened,
//     // isSaving,
//     checkedValue,
//     isEmpty,
//     isValid,
//   } = props;
//   const [value, setValue] = useState(initialValue);
//   const [status, setStatus] = useState("open");
//   const [isInputEmpty, setIsInputEmpty] = useState(false);
//   const [isInputValid, setIsInputValid] = useState(true);
//   const regex = /[0-9\\.,:^\]\]]/g;
//   let postValue = "";
//   const checkInput = (value) => {
//     if (value !== "" && !regex.test(value)) {
//       postValue = value.trim().toLowerCase();
//       checkedValue(postValue);
//       console.log(value.trim().toLowerCase());
//     } else {
//         // setStatus("error");
//       console.log(status);
//       postValue = "";
//     //   if (value === "") {
//     //     setIsInputEmpty(true);
//     //     console.log(isInputEmpty);
//     //   }
//       if (regex.test(value)) {
//         setIsInputValid(false);
//         console.log(isInputValid);
//       }
//     }
//   };
//   const onInputChange = (e) => {
//     setStatus("open");
//     setValue(e.target.value);
//     if (value === "" || regex.test(value)) {
//         setStatus("error");
//     } 
//     // if (e.target.value === "") {
//     //   setIsInputEmpty(true);
//     // }
//     // console.log(value);
//     // checkInput(e.target.value);
//     // isEmpty(isInputEmpty);
//     // isValid(isInputValid);
//     // console.log(isInputValid);
//     // console.log(isInputEmpty);
//     // console.log(postValue);
//   };
//   const onHandleFocus = (e) => {
//     setValue(e.target.value);
//     if (e.target.value === "") {
//       setIsInputEmpty(true);
//     }

//     checkInput(e.target.value);
//     isEmpty(isInputEmpty);
//     isValid(isInputValid);
//     console.log(value);
//     console.log (status);
//     console.log(isInputEmpty);
//     console.log(isInputValid);
//   };


//   //   useEffect(() => {
//   //     checkInput();
//   //     isEmpty(isInputEmpty);
//   //     isValid(isInputValid);
//   //     checkedValue(postValue);
//   //   }, [isSaving]);
//   return (
//     <>
//       {isInputOpened && (
//         <Input
//           status={status}
//           placeholder="term"
//           nameInput="term"
//           content={value}
//           onHandleChange={onInputChange}
//           onHandleFocus={onHandleFocus}
//         />
//       )}
//     </> 
//   );
// }

// export default InputTerm;

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
