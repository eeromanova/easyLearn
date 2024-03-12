import styles from "./button.module.css";

function Buttonclear(props) {
  const { bgcolor } = props;
  const buttonclearstyle=`${styles.clear} ${styles[bgcolor]}`;
  return <button className={buttonclearstyle} disabled></button>;
}
export default Buttonclear;
