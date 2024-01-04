import styles from '@/styles/buycrypto.module.css'
import CurrencySelector from './CurrencySelector'

export default function Buycrypto() {
return(
  <main className={ styles['simplex__main'] }>
    <section className={ styles['simplex__mask'] }>
      <form action="" className={ styles['simplex__form'] }>
        <header className={ styles['simplex__header'] }>
          <h1 className={ styles['simplex__title'] }>Buy Cryptocurrency</h1> 
          <p className={ styles['simplex__paragraph'] }>Shop confidently at Cryptospace – powered by <a className={ styles['simplex__link'] }  href="https://www.simplex.com/">Simplex</a> for top-tier financial security. Purchase with peace of mind!</p>   
        </header>
        <div className={ styles['simplex__section'] }>
          <label className={ styles['simplex__label'] }>I want to buy</label>
          <CurrencySelector 
            currency = 'CRYPTO'
            endpoint = 'https://sandbox.test-simplexcc.com/v2/supported_crypto_currencies?public_key=pk_test_e56309b0-6f63-4bb9-ad5b-f4a738d2316e'
            method = 'GET'
          />
        </div>
        <div className={ styles['simplex__section'] }>
          <label className={ styles['simplex__label'] }>I want to spend</label>
          <CurrencySelector 
            currency = 'FIAT'
            endpoint = 'https://sandbox.test-simplexcc.com/v2/supported_fiat_currencies?public_key=pk_test_e56309b0-6f63-4bb9-ad5b-f4a738d2316e'
            method = 'GET'
          />
        </div>
        <div className={ styles['simplex__section'] }>
          <p className={ styles['simplex__label'] }>I will receive</p>
          <div className={ styles['simplex__field']}>
            <div className={ styles['simplex__input'] }>
              <p className={ styles['simplex__network'] }>0.00023</p>
            </div>
          </div>
        </div>
        <div className={ styles['simplex__section'] }>
          <button className={ styles['simplex__button'] }>Buy Now</button>
        </div>
      </form>      
    </section>
  </main>
)
}

