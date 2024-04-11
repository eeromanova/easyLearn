import styles from "./loader.module.css";

function Loader() {
    const style1=`${styles.f_circleG} ${styles.frotateG_01}`
    const style2=`${styles.f_circleG} ${styles.frotateG_02}`
    const style3=`${styles.f_circleG} ${styles.frotateG_03}`
    const style4=`${styles.f_circleG} ${styles.frotateG_04}`
    const style5=`${styles.f_circleG} ${styles.frotateG_05}`
    const style6=`${styles.f_circleG} ${styles.frotateG_06}`
    const style7=`${styles.f_circleG} ${styles.frotateG_07}`
    const style8=`${styles.f_circleG} ${styles.frotateG_08}`

  return (
    <div className={styles.floatingCirclesG}>
      <div className={style1}></div>
      <div className={style2}></div>
      <div className={style3}></div>
      <div className={style4}></div>
      <div className={style5}></div>
      <div className={style6}></div>
      <div className={style7}></div>
      <div className={style8}></div>
    </div>
  );
}

export default Loader;
