import { useState } from "react";

const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue); //первоначальное значение поля
  const [wasInputTouch, setWasInputTouch] = useState(false); //показывает, касался ли пользователь мышкой input'а. Для любого поля.
  const checkIsEmpty = (valueInput) => {
    return valueInput.trim() === "";
  };
  const regex = /[0-9\\.,\]\]]/g;
  const checkIsValid = (valueInput) => {
    return !regex.test(valueInput);
  };

  const isValueValid = checkIsValid(inputValue); 
  //валидное ли введенное значение? Валидность проверяется фукнцие, которую мы передаем в наш хук при вызове, и теперь  передаем в нее значение, которое ввел пользователь
  const isValueEmpty=checkIsEmpty(inputValue); //пусто ли введенное значение? Пусто, если пользователь касался (wasInputTouch) и ввел пустое значение (!isValueValid)

  const isInputInvalid = (!isValueValid&& wasInputTouch)||(isValueEmpty&& wasInputTouch); //не валидный ли инпут? Не валидный, если пользователь его касался (wasInputTouch) и ввел неправильное значение (!isValueValid)
console.log(isInputInvalid);
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  }; //обрабатываем изменения, которые пользователь вносит в поле

  const inputLostFocusHandler = () => {
    setWasInputTouch(true);
  }; //если был фокус на поле - меняем состояние

  const resetValues = () => {
    setInputValue(initialValue);
    setWasInputTouch(false);

  }; //очищаем оба поля через обратную передачу (в поле в разметке должно быть value)

  const styles = isInputInvalid ? "error" : "open"; //если поле не валидно - делаем обводку красной

  return {
    value: inputValue,
    isValid: isValueValid,
    isEmpty: isValueEmpty,
    styles,
    inputChangeHandler: inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};
export default useInput;
