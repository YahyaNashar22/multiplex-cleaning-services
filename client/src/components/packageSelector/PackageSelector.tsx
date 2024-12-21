import { packages } from "../../utils/servicePackages";
import styles from "./packageSelector.module.css";

const PackageSelector = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>PACKAGE</p>

      <ul className={styles.packageList}>
        {packages.map((packageItem, index) => {
          return (
            <li key={index}>
              <div className={styles.packageContainer}>
                <h3 className={styles.packageName}>{packageItem.name}</h3>
                <p className={styles.packageDescription}>
                  {packageItem.description}
                </p>
                <p className={styles.pricePerCleanerTxt}>PRICE PER CLEANER</p>
                <p className={styles.packagePrice}>
                  {packageItem.pricePerCleaner === "Request for Quotation"
                    ? packageItem.pricePerCleaner
                    : `AED ${packageItem.pricePerCleaner} /hr`}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PackageSelector;
