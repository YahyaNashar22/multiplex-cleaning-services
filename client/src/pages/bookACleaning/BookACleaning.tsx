import styles from "./bookACleaning.module.css";

import logo from "../../assets/logo.png";
import { useState } from "react";
import { packageType } from "../../utils/servicePackages";
import PackageSelector from "../../components/packageSelector/PackageSelector";
import CleanersCounter from "../../components/cleanersCounter/CleanersCounter";

const BookACleaning = () => {
  const [selectedService, setSelectedService] = useState<packageType | null>(
    null
  );

  const [cleaners, setCleaners] = useState<number>(1);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>BOOK A CLEANING</h1>

      <img src={logo} alt="company logo" className={styles.logo} />

      <h2 className={styles.slogan}>Home & Office Cleaning</h2>

      <PackageSelector />

      <CleanersCounter cleaners={cleaners} setCleaners={setCleaners} />
    </main>
  );
};

export default BookACleaning;
