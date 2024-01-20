import { SimplexContext } from '@/context/SimplexContext'
import styles from '@/styles/buycrypto.module.css'
import { useContext } from 'react'

const SimplexList = ({
    cleanData, 
    currency, 
}) => {

  const { setCrypto, setCryptoTicker, setFiatTicker, active, setActive } = useContext(SimplexContext)

  const handleCryptoCurrency = (ticker, currency) => {
    setCrypto(currency)
    setCryptoTicker(ticker)
    setActive(!active)
  }

  const handleFiatTicker = (ticker) => {
    setFiatTicker(ticker)
    setActive(!active)
  }

  return (
    <>
    {
        cleanData?.map(data => (currency === 'CRYPTO') ? 
        <div 
          className={styles['simplex__list-item']}
          key={`currency-${data.currency}-${data.ticker}`} 
          onClick={() => handleCryptoCurrency(data.ticker, data.currency)}
        >
          {data.ticker} {data.currency}
        </div> :
        <div
          className={styles['simplex__list-item']}
          key={`currency-${data.ticker}`}
          onClick={() => handleFiatTicker(data.ticker)}
        >
            {data.ticker}
          </div>
        )    
    }
    </>
  )
}

export default SimplexList
