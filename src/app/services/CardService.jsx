"use client"
import Image from "next/image";
import styles from "@/styles/services.module.css";

export default function CardService({ title, description, icon, onClick}) {


  return (
    <div className={styles.card}>
      <Image className={styles.cardIcon} src={icon} alt={title}/>
      <h3>{title}</h3>
      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <button
        className={styles.cardBtn}
        onClick={onClick}
      >
        More details &rarr;
      </button>
    </div>
  );
}
