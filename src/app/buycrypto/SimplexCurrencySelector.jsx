"use client"
import { useContext, useEffect, useState } from 'react'

import SimplexNetwork from './SimplexNetwork'
import SelectorButton from './SelectorButton'
import SimplexList from './SimplexList'

import { useFetch } from '@/hooks/useFetch'

import { SimplexContext } from '@/context/SimplexContext'
import { cleanCurrencyData } from '@/utils/cleanCurrencyData'

import styles from '@/styles/buycrypto.module.css'

const SimplexCurrencySelector = ({ currency, endpoint, method }) => {
  
  const { active, crypto, cryptoTicker, fiatTicker } = useContext(SimplexContext)
  const { data, loading } = useFetch( endpoint, method );

  const [cleanData, setCleanData] = useState(null)

  useEffect(() => {
    if(!loading) {
      cleanCurrencyData(currency, data, setCleanData)
  }
  }, [currency, data, loading])

  return (
    <div className={ styles['simplex__field']}>
      <div className={ active ? `${styles['simplex__input']} ${styles['simplex__input--active']}` : styles['simplex__input'] }>
          <SimplexNetwork currency={currency} crypto={crypto} />
          <p className={ styles['simplex__ticker'] }>{(currency === 'CRYPTO') ? cryptoTicker : fiatTicker}</p>
          <SelectorButton loading={loading} currency={currency} />
      </div>
      <div className={ 
        (active === currency) ? 
          `${styles['simplex__selection']} ${styles['simplex__selection--active']}` : 
          styles['simplex__selection'] }
      >
        <div className={ styles['simplex__list'] }>
          <SimplexList 
            cleanData={cleanData} 
            currency={currency} 
          />
        </div>
      </div>
    </div>
  )
}

export default SimplexCurrencySelector
