import React from'react';

function Input(props) {
    const {content, placeholder, theme, attribute}=props;
    // const theme=props.theme;
  return (
    <input className={theme.input} type="text" value={content} placeholder={placeholder} readonly={attribute}/>
  );
}
export default Input;