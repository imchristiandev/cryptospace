import styles from '@/styles/buycrypto.module.css'
import Image from 'next/image';

export default function Buycrypto() {
return(
  <main className={ styles.main }>
    <div className={ styles.mask }>
      <h2>Buy Crypto</h2>
      <h3> coming soon...</h3>
      <img src='/visa-master.jpg' alt='visa and mastercard logos'/>
      <form id="simplex-form">
        <div id="checkout-element">
        </div>
    </form>
    </div>
  </main>
)
}

