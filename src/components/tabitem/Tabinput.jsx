import Input from "../input/Input";
import styles from "./item.module.css";
import Buttonsave from "../button/Buttonsave";
import Button from "../button/Button";
import Edit from "../../assets/image/svg/edit_icon.svg";
import Delete from "../../assets/image/svg/delete_icon.svg";

function Tabinput() {

    return (
    <div className={styles.container}>
      <div className={styles.container_input}>
        <Input status='open' placeholder="term"  />
        <Input status='open' placeholder="transcription" />
        <Input status='open' placeholder="translation" />
      </div>
      <div className={styles.container_buttons}>
        <Buttonsave />
        <Button content={Edit} />
        <Button content={Delete} />
      </div>
    </div>
  );
}

export default Tabinput;
