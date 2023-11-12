import styles from '@/styles/exchange.module.css'
import Image from 'next/image';
import Mockup from '@/images/Mockup.png'

export default function Exchange() {
return(
  <main className={ styles.main }>
    <div className={ styles.mask }>
      <h2> Online Exchange</h2>
      <h3> coming soon..</h3>
      <Image src={Mockup} alt='a laptop with the cryptoexchange'/>
      <p>Due to regulatory constraints, our exchange does not accept US citizens. Only non-US citizens are eligible to participate.</p>
    </div>
  </main>
)
}

