import {ChevronDownIcon} from '@heroicons/react/24/outline'
import styles from '@/styles/buycrypto.module.css'

const CryptoCurrencySelector = () => {
  return (
    <div className={ styles['simplex--input'] }>
        <p className={ styles['simplex--network'] }>Bitcoin</p>
        <p className={ styles['simplex--ticker'] }>BTC</p>
        <ChevronDownIcon className={ styles['simplex--selector'] } />
    </div>
  )
}

export default CryptoCurrencySelector
