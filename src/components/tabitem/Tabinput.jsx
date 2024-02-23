import Input from "../input/Input";
import styles from "./item.module.css";
import themeOpen from "../input/input-open.module.css";
import Buttonsave from "../button/Buttonsave";
import Button from "../button/Button";
import Edit from "../svg/edit_icon.svg";
import Delete from "../svg/delete_icon.svg";

function Tabinput() {
  return (
    <div className={styles.container}>
      <div className={styles.container_input}>
        <Input theme={themeOpen} placeholder="term" />
        <Input theme={themeOpen} placeholder="transcription" />
        <Input theme={themeOpen} placeholder="translation" />
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
