import styles from "./button.module.css";

function ButtonClear(props) {
  const { bgcolor } = props;
  const buttonclearstyle = `${styles.clear} ${styles[bgcolor]}`;
  return <button className={buttonclearstyle} disabled></button>;
}
export default ButtonClear;
