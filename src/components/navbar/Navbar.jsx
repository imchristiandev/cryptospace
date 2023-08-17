import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import logo from '../../images/cryptospace.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <a
          href="/"
          rel="noopener noreferrer"
          className={ styles["logo-a"] }
        >
          <Image
            src={ logo }
            alt="Cryptospace Logo"
            className= {styles.logo}
            priority
          />
        </a>
        <a
          href="https://cryptomex.online/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
          {' '}Buy Bitcon with Credit Card
        </a>
      </div>
    </div>
  )
}
