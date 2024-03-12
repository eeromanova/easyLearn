import styles from './button.module.css'


function Button(props) {
  const { content, onHandleClick, bgcolor } = props;
  const buttonstyle=`${styles.button} ${styles[bgcolor]}`;
  return (
    <button onClick={onHandleClick} className={buttonstyle}>
      <img src={content} alt='icon' className={styles.image} />
    </button>
  );
}
export default Button;
