import styles from '@/styles/buycrypto.module.css'
import Image from 'next/image';

export default function Buycrypto() {
return(
  <div className={ styles.main }>
    <div className={ styles.mask }>
      <h2>Buy Crypto</h2>
      <h3> coming soon...</h3>
      <Image src='/visa-master.jpg' alt='visa and mastercard logos'/>
    </div>
   
  </div>
)
}

