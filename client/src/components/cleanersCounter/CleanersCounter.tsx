import { FC } from "react";
import styles from "./cleanersCounter.module.css";

import cleanerIcon from "../../assets/cleaner-person.svg";

interface props {
  cleaners: number;
  setCleaners: (cleaners: number) => void;
}

const CleanersCounter: FC<props> = ({ cleaners, setCleaners }) => {
  const incrementCleaners = () => {
    setCleaners(cleaners + 1);
  };

  const decrementCleaners = () => {
    if (cleaners > 1) setCleaners(cleaners - 1);
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>CLEANERS</p>
      <div className={styles.counterContainer}>
        <button className={styles.operator} onClick={decrementCleaners}>
          -
        </button>
        <button className={styles.operator} onClick={incrementCleaners}>
          +
        </button>
        <div className={styles.total}>
          <p className={styles.totalText}>{cleaners}</p>
          <p className={styles.times}>x</p>
          <img src={cleanerIcon} width="50px" height="50px" alt="cleaner" />
        </div>
      </div>
    </div>
  );
};

export default CleanersCounter;
