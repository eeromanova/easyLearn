import { useState } from "react";

// const checkInput = (validateValueFunc) => {
//   const [inputValue, setInputValue] = useState(''); //первоначальное значение поля

//   const inputChangeHandler = (event) => {
//     setInputValue(event.target.value);
//     console.log(inputValue);
//   };
//   const isValueValid = validateValueFunc(inputValue); //проверка валидности значения. Функция вводится для каждого инпута своя

//   const status = isValueValid ? "open" : "error";

//   return {
//     value: inputValue,
//     // hasError: isInputInvalid,
//     isValid: isValueValid,
//     status,
//     inputChangeHandler,
//     // inputLostFocusHandler,
//     // resetValues,
//   };
// };
// export default checkInput;

//   const [wasInputTouch, setWasInputTouch] = useState(false); //показывает, касался ли пользователь мышкой input'а. Для любого поля.

//   const isValueValid = validateValueFunc(inputValue); //проверка валидности значения. Функция вводится для каждого инпута своя
//   const isInputInvalid = !isValueValid && wasInputTouch; //не валидный ли инпут? Не валидный, если пользователь его касался (wasInputTouch) и ввел неправильное значение (!isValueValid)

//   const inputChangeHandler = (event) => {
//     setInputValue(event.target.value);
//     console.log(inputValue);
//   };

//   const inputLostFocusHandler = () => {
//     setWasInputTouch(true);
//   }; //если был фокус на поле - меняем состояние

//   const resetValues = () => {
//     setInputValue("");
//     setWasInputTouch(false);
//   }; //очищаем оба поля через обратную передачу (в поле в разметке должно быть value)

//   const styles = isInputInvalid ? "form-control invalid" : "form-control"; //если поле не валидно - делаем обводку красной

//   return {
//     value: inputValue,
//     hasError: isInputInvalid,
//     isValid: isValueValid,
//     styles,
//     inputChangeHandler: inputChangeHandler,
//     inputLostFocusHandler,
//     resetValues,
//   };
// };
// export default useInput;
