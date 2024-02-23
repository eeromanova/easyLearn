import styles from './button.module.css'


function Button(props) {
  const { content } = props;
  return (
    <button className={styles.button}>
      <img src={content} alt='icon' className={styles.image} />
    </button>
  );
}
export default Button;
