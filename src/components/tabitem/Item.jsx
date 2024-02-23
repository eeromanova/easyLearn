import styles from "./item.module.css";
import Input from "../input/Input";
import themeSaved from "../input/input-saved.module.css";
import themeOpen from "../input/input-open.module.css";
import Buttonsave from "../button/Buttonsave";
import Button from "../button/Button";
import Edit from "../svg/edit_icon.svg";
import Delete from "../svg/delete_icon.svg";

function Item(props) {
  const { term, transcription, translation } = props;
  const edit= <Button content={Edit} />;
  if (edit.clicked) {
    console.log('edit');
    return (
      <div className={styles.container}>
        <div className={styles.container_input}>
          <Input theme={themeOpen} content={term} />
          <Input theme={themeOpen} content={transcription} />
          <Input theme={themeOpen} content={translation} />
        </div>
        <div className={styles.container_buttons}>
          <Buttonsave />
          <Button content={Edit} />
          <Button content={Delete} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.container_input}>
          <Input theme={themeSaved} content={term} />
          <Input theme={themeSaved} content={transcription} />
          <Input theme={themeSaved} content={translation} />
        </div>
        <div className={styles.container_buttons}>
          <Button content={Edit} />
          <Button content={Delete} />
        </div>
      </div>
    );
  }
}
export default Item;
