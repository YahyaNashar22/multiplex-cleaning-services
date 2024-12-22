import { FC, useState } from "react";
import {
  frequencyOfServiceOptions,
  packageType,
} from "../../utils/servicePackages";
import styles from "./frequencyOfService.module.css";

interface props {
  selectedPackage: packageType | null;
}

const repetitions = Object.values(frequencyOfServiceOptions);

export const FrequencyOfService: FC<props> = ({ selectedPackage }) => {
  const [selected, setSelected] = useState<frequencyOfServiceOptions | null>(
    selectedPackage?.frequencyOfService || null
  );

  const handleSelect = (time: frequencyOfServiceOptions) => {
    if (selectedPackage) {
      const newFrequency = selected === time ? null : time; // Toggle selection
      setSelected(newFrequency);
      selectedPackage.frequencyOfService = newFrequency || undefined; // Update package state
      console.log("Updated Package:", selectedPackage);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>FREQUENCY OF SERVICE</p>
      <ul className={styles.frequencyList}>
        {repetitions.map((time, index) => {
          return (
            <li key={index} className={styles.timeSlot}>
              <label className={styles.timeSlotLabel}>
                <input
                  className={styles.timeSlotInp}
                  type="checkbox"
                  checked={selected === time}
                  onChange={() =>
                    handleSelect(time as frequencyOfServiceOptions)
                  }
                />
                {time}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
