import styles from '@/styles/buycrypto.module.css'
import CryptoCurrencySelector from './CryptoCurrencySelector'
import Link from 'next/link'

export default function Buycrypto() {
return(
  <main className={ styles['simplex--main'] }>
    <section className={ styles['simplex--mask'] }>
      <form action="" className={ styles['simplex--form'] }>
        <header className={ styles['simplex--header'] }>
          <h1 className={ styles['simplex--title'] }>Buy Cryptocurrency</h1> 
          <p className={ styles['simplex--paragraph'] }>Shop confidently at Cryptospace – powered by <a className={ styles['simplex--link'] }  href="https://www.simplex.com/">Simplex</a> for top-tier financial security. Purchase with peace of mind!</p>   
        </header>
        <div className={ styles['simplex--section'] }>
          <label className={ styles['simplex--label'] }>I want to buy</label>
          <CryptoCurrencySelector />
        </div>
        <div className={ styles['simplex--section'] }>
          <label className={ styles['simplex--label'] }>I want to spend</label>
        </div>
        <div className={ styles['simplex--section'] }>
          <p className={ styles['simplex--label'] }>I will receive</p>
        </div>
      </form>      
    </section>
  </main>
)
}

