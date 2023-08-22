import styles from '@/styles/buycrypto.module.css'
import Image from 'next/image';

export default function Buycrypto() {
return(
  <div className={ styles.main }>
    <div className={ styles.mask }>
      <h2> Crypto With Credit Card</h2>
      <h3> comming soon..</h3>
      <Image src='/visa-mastercard.jpg'/>
    </div>
   
  </div>
)
}

