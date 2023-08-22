import styles from '@/styles/exchange.module.css'
import Image from 'next/image';

export default function Exchange() {
return(
  <div className={ styles.main }>
    <div className={ styles.mask }>
      <h2> Online Exchange</h2>
      <h3> comming soon..</h3>
      <Image src='/Mockup.png'/>
      <p>Do to the aggressive and uncertain regulatory environment in the United States . Cryptospace does not service U.S citizens .</p>
    </div>
   
  </div>
)
}

