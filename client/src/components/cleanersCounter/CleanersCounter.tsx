import styles from "./cleanersCounter.module.css";

const CleanersCounter = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>CLEANERS</p>
      <div className={styles.counterContainer}>
        <div className={styles.minus}>-</div>
        <div className={styles.plus}>+</div>
        <div className={styles.total}>
          <p className={styles.totalText}></p>
          <p className={styles.times}>x</p>
          <img src="" alt="cleaner" />
        </div>
      </div>
    </div>
  );
};

export default CleanersCounter;
