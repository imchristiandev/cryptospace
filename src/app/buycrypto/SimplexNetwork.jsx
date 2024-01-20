import { useContext } from 'react'
import { SimplexContext } from '@/context/SimplexContext'
import styles from '@/styles/buycrypto.module.css'

const SimplexNetwork = ({ currency, crypto }) => {

  const { setFiatValue } = useContext(SimplexContext)
  
  //* Method to manipulate the fiat currency value to exchange
  const handleFiatValue = (e) => {
    setFiatValue(e.target.value)
  }

  return (currency === 'CRYPTO') ?
    <p className={ styles['simplex__network'] }>{crypto}</p> :
    <input 
      type='number' 
      className={ styles['simplex__network'] } 
      placeholder='Money to spend'
      onChange={ handleFiatValue }
    />
}

export default SimplexNetwork
