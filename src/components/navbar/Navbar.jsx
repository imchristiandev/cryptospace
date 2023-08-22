"use client"
import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import logo from '../../images/cryptospace.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        
        <div className={styles.rightContainer}>
        <a
            href="/buycrypto"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
            {' '}Buy Crypto{' '}
            <Image src="/visa.svg" alt="Visa" className={styles.creditCardIcon}/>
            <Image src="/mastercard.svg" alt="Mastercard" className={styles.creditCardIcon}/>
          </a>



          <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {menuOpen && (
          <ul className={styles.dropdownMenu}>
             <li className={styles.menuItem}>
              <a href="/">Home</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/online-exchange">Online Exchange</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/policy">Privacy Policy</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
