import { useState } from "react";

import styles from "./bookACleaning.module.css";

import logo from "../../assets/logo.png";
import { packageType } from "../../utils/servicePackages";
import PackageSelector from "../../components/packageSelector/PackageSelector";
import CleanersCounter from "../../components/cleanersCounter/CleanersCounter";
import PackageServices from "../../components/packageServices/PackageServices";
import { FrequencyOfService } from "../../components/frequencyOfService/FrequencyOfService";

const BookACleaning = () => {
  const [selectedPackage, setSelectedPackage] = useState<packageType | null>(
    null
  );

  const [cleaners, setCleaners] = useState<number>(1);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>BOOK A CLEANING</h1>

      <img src={logo} alt="company logo" className={styles.logo} />

      <h2 className={styles.slogan}>Home & Office Cleaning</h2>

      <PackageSelector
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
      />

      <CleanersCounter cleaners={cleaners} setCleaners={setCleaners} />

      {selectedPackage &&
        selectedPackage?.pricePerCleaner !== "Request for Quotation" && (
          <>
            <PackageServices selectedPackage={selectedPackage} />
          </>
        )}

      {selectedPackage &&
        selectedPackage?.pricePerCleaner !== "Request for Quotation" &&
        selectedPackage?.name === "REGULAR BASIC CLEANING" && (
          <>
            <FrequencyOfService selectedPackage={selectedPackage} />
          </>
        )}
    </main>
  );
};

export default BookACleaning;
