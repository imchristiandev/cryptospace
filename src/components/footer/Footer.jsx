import styles from "../../styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.content }>
        <div className={ styles.contactTitle }>
          CONTACT.
        </div>
        <a
          className={ styles.contact }
          href="tel:+527441759713"
          rel="noopener noreferrer"
        >
          +52 744 175 9713
        </a>
        <a
          className={ styles.contact }
          href="mailto:info@cryptospace.global"
          rel="noopener noreferrer"
        >
          info@cryptospace.global
        </a>
        <div className={ styles.copyright }>
          Copyright 2022 Cryptospace, all rights reserved.
        </div>
        <a
          href="/policy"
          className={ styles.policy }
        >
          know the policy and data privacy
        </a>
      </div>
    </div>
  )
}
