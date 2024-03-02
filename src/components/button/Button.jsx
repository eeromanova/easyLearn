import styles from './button.module.css'


function Button(props) {
  const { content, onHandleClick } = props;
  return (
    <button onClick={onHandleClick} className={styles.button}>
      <img src={content} alt='icon' className={styles.image} />
    </button>
  );
}
export default Button;
