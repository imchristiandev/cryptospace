"use client"

import { useEffect, useState } from 'react'

import { useFetch } from '@/hooks/useFetch'
import {ChevronDownIcon, ChevronUpIcon, ArrowPathIcon} from '@heroicons/react/24/outline'
import { cleanCurrencyData } from '@/utils/cleanCurrencyData'
import styles from '@/styles/buycrypto.module.css'


const CurrencySelector = ({ currency, endpoint, method }) => {
  const { data, loading } = useFetch( endpoint, method );

  const [active, setActive] = useState(false)
  const [crypto, setCrypto] = useState('Select your Cryptocurrency')
  const [cryptoTicker, setCryptoTicker] = useState('UND')
  const [fiatTicker, setFiatTicker] = useState('CUR')
  const [cleanData, setCleanData] = useState(null)

  useEffect(() => {
    if(!loading) {
      cleanCurrencyData(currency, data, setCleanData)
  }
  }, [currency, data, loading])


  const handleSelection = (event) => {
    event.preventDefault()
    setActive(!active)
  }

  return (
    <div className={ styles['simplex__field']}>
      <div className={ active ? `${styles['simplex__input']} ${styles['simplex__input--active']}` : styles['simplex__input'] }>
          { (currency === 'CRYPTO') ?
            <p className={ styles['simplex__network'] }>{crypto}</p> :
            <input type='number' className={ styles['simplex__network'] } />
          }
          <p className={ styles['simplex__ticker'] }>{(currency === 'CRYPTO') ? cryptoTicker : fiatTicker}</p>
          <button className={ styles['simplex__selector'] } onClick={handleSelection}>
            {
              loading ?
                <ArrowPathIcon className={ styles['rotate'] }/> :
                active ?
                  <ChevronUpIcon /> :
                  <ChevronDownIcon />
            }
          </button>
      </div>
      <div className={ 
        active ? 
          `${styles['simplex__selection']} ${styles['simplex__selection--active']}` : 
          styles['simplex__selection'] }>
        <div className={ styles['simplex__list'] }>
          {
            cleanData?.map(data => (currency === 'CRYPTO') ? 
            <div key={`currency-${data.currency}-${data.ticker}`}>{data.ticker} {data.currency}</div> :
            <div key={`currency-${data.ticker}`}>{data.ticker}</div>
            )    
          }
        </div>
      </div>
    </div>
  )
}

export default CurrencySelector
