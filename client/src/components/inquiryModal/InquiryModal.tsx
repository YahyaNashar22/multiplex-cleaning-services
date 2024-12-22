import { FC, useEffect } from "react";
import styles from "./inquiryModal.module.css";

interface props {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
}

const InquiryModal: FC<props> = ({ openModal, setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  // TODO: Add onSubmit logic
  const onSubmit = () => {};

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (openModal) document.body.style.overflow = "hidden";

    return () => {
      // Restore scrolling when the modal is closed
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <form className={styles.formContainer} method="POST" onSubmit={onSubmit}>
        <div className={styles.formHeader}>
          <h1 className={styles.title}>Inquiry</h1>
          <p className={styles.close} onClick={closeModal}>
            x
          </p>
        </div>
        <div className={styles.formContent}>
          <label className={styles.inpLabel}>
            Package:
            <input className={styles.formInp} placeholder="package" />
          </label>

          <label className={styles.inpLabel}>
            Name:
            <input className={styles.formInp} placeholder="name" />
          </label>

          <label className={styles.inpLabel}>
            Email:
            <input className={styles.formInp} placeholder="email" />
          </label>

          <label className={styles.inpLabel}>
            Phone:
            <input className={styles.formInp} placeholder="phone" />
          </label>

          <label className={styles.inpLabel}>
            Message:
            <textarea
              className={styles.formInp}
              aria-multiline
              placeholder="message"
            />
          </label>

          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryModal;
