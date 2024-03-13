
import styles from "./item.module.css";
import Button from "../button/Button";
import { useState } from "react";
import Tabinput from "./Tabinput";
import Add from "../../assets/image/svg/add_icon.svg";

function Tabinputfinal() {
  const [input, setInput] = useState(false);
  const handleClick=()=>{
    setInput(!input);
  }

  return (
    <div className={styles.container}>
{input?<Tabinput/>:<Button bgcolor="secondary" onHandleClick={handleClick} content={Add} />}
    </div>
  );
}

export default Tabinputfinal;