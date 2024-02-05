import Image from "next/image";
import styles from "@/styles/services.module.css";

export default function CardDescriptionModal({ title, description, imageUrl, onClose,}
) {
  return (
    <div className={styles.backgroundModal}>
      <div className={styles.cardModal}>
        <h3>{title}</h3>
        <span className={styles.closeModal} onClick={onClose}>
          &times;
        </span>
        <div className={styles.lineModal}></div>
        <div className={styles.descriptionContainer}>
          {Array.isArray(description) ? (
            description.map((desc, index) => (
              <p key={index} className={styles.descriptionModal}>
              <span className={styles.bulletPoint}></span>
              {desc}</p>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className={styles.iconsContainer}>
          <Image src={imageUrl} alt={title}
            className={styles.imageModal}
          />
        </div>
      </div>
    </div>
  );
}
