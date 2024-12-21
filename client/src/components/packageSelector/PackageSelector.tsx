import { FC, useState } from "react";
import { packages, packageType } from "../../utils/servicePackages";
import styles from "./packageSelector.module.css";
import InquiryModal from "../inquiryModal/InquiryModal";

interface props {
  selectedPackage: packageType | null;
  setSelectedPackage: (e: packageType) => void;
}

const PackageSelector: FC<props> = ({
  selectedPackage,
  setSelectedPackage,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const choosePackage = (packageItem: packageType) => {
    if (packageItem.pricePerCleaner === "Request for Quotation") {
      setOpenModal(true);
    } else {
      setSelectedPackage(packageItem);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>PACKAGE</p>

      <ul className={styles.packageList}>
        {packages.map((packageItem, index) => {
          return (
            <li key={index}>
              <div
                className={`${styles.packageContainer} ${
                  selectedPackage?.name == packageItem.name
                    ? styles.selected
                    : ""
                }`}
                onClick={() => choosePackage(packageItem)}
              >
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

      {openModal && <InquiryModal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default PackageSelector;
