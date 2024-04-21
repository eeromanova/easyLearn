// import Input from "./Input";
import styles from "./input.module.css";
import { useState, useEffect } from "react";

function InputTranscription(props) {
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
      onHandleChange(true, `[${value.trim().toLowerCase()}]`);
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
            placeholder="transcription"
            // nameInput="translation"
            id="transcription"
            // onHandleChange={onHandleChange}
            onChange={onHandleImput}
            onBlur={onHandleBlureFocus}
            // onHandleFocus={onHandleFocus}
          />
          {err.isErr && <label className={styles.error_text} htmlFor="transcription">{err.text}</label>}
        </div>
      )}
    </>
  );
}

export default InputTranscription;


// function InputTranscription(props) {
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
//   const [isInputEmpty, setIsInputEmpty] = useState(true);
//   const [isInputValid, setIsInputValid] = useState(true);
//   const regex = /[0-9\\.,\]\]]/g;
//   let postValue = "";
//   const checkInput = (value) => {
//     if (value !== "" && !regex.test(value)) {
//       postValue = `[${value.trim().toLowerCase()}]`;
//       checkedValue(postValue);
//       console.log(value.trim().toLowerCase());
//     } else {
//       // setStatus("error");
//       if (regex.test(value)) {
//         setIsInputValid(false);
//         console.log(isInputValid);
//       }
//       // postValue = "";
//     }
//   };
//   const onInputChange = (e) => {
//     setStatus("open");
//     setValue(e.target.value);
//     if (value === "" || regex.test(value)) {
//       setStatus("error");
//   } 
//     // if (e.target.value === "") {
//     //   setIsInputEmpty(true);
//     // }
//     // console.log(value);
//     // console.log (status);
//     // console.log(isInputEmpty);
//     // console.log(isInputValid);
//     // checkInput(e.target.value);
//     // isEmpty(isInputEmpty);
//     // isValid(isInputValid);
//   };

//   const onHandleFocus = (e) => {
//     setValue(e.target.value);
//     if (e.target.value === "") {
//       setIsInputEmpty(true);
//     }
//     console.log(value);
//     console.log (status);
//     console.log(isInputEmpty);
//     console.log(isInputValid);
//     checkInput(e.target.value);
//     isEmpty(isInputEmpty);
//     isValid(isInputValid);
//   };

//   // useEffect(() => {
//   //   checkInput();
//   //   isEmpty(isInputEmpty);
//   //   isValid(isInputValid);
//   //   checkedValue(postValue);
//   // }, [isSaving]);
//   return (
//     <>
//       {isInputOpened && (
//         <Input
//           status={status}
//           placeholder="transcription"
//           nameInput="transcription"
//           content={value}
//           onHandleChange={onInputChange}
//           onHandleFocus={onHandleFocus}
//         />
//       )}
//     </>
//   );
// }

// export default InputTranscription;
