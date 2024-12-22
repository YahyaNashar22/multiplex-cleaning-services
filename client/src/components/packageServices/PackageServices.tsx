import { FC } from "react";
import { packageType } from "../../utils/servicePackages";
import styles from "./packageServices.module.css";

interface props {
  selectedPackage: packageType | null;
}

const PackageServices: FC<props> = ({ selectedPackage }) => {
  const toggleService = (service: string) => {
    if (selectedPackage?.requestedServices) {
      const index = selectedPackage.requestedServices.indexOf(service);
      if (index !== -1) {
        // Service exists, remove it
        selectedPackage.requestedServices.splice(index, 1);
      } else {
        // Service doesn't exist, add it
        selectedPackage.requestedServices.push(service);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{selectedPackage?.name}</p>
      <ul className={styles.servicesList}>
        {selectedPackage?.availableServices?.map((service, index) => {
          return (
            <li key={index} className={styles.service}>
              <label className={styles.serviceLabel}>
                <input
                  className={styles.serviceInp}
                  type="checkbox"
                  onClick={() => toggleService(service)}
                />
                {service}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PackageServices;
