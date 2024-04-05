import styles from "./button.module.css";

function Button(props) {
  const { content, onHandleClick, bgcolor, buttonStatus } = props;
  const buttonstyle = `${styles.button} ${styles[bgcolor]}`;
  const svgstyle = `${styles.image} ${styles[buttonStatus]}`;
  return (
    <button onClick={onHandleClick} className={buttonstyle} disabled={buttonStatus}>
      <img src={content} alt="icon" className={svgstyle} />
    </button>
  );
}
export default Button;
