import { useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { SimplexContext } from '@/context/SimplexContext'
import styles from '@/styles/buycrypto.module.css'
import { useFetch } from '@/hooks/useFetch';

const SimplexNetwork = ({ currency, crypto }) => {
  const [ userId ] = useState(uuidv4())
  const { fiatValue, setFiatValue, fiatTicker, cryptoTicker } = useContext(SimplexContext)
  const [clientIp, setClientIp] = useState(null);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setClientIp(data.ip));
  }, []);

  useEffect(() => {

    const options = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'ApiKey eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVyIjoiY3J5cHRvc3BhY2VfYXBpIiwiaXAiOlsiMS4yLjMuNCJdLCJzYW5kYm94Ijp0cnVlfQ.v5XLbsqCs26pw7M5CE7oS6fykRT5re9VJSkw_sjq-98'
      },
      
      body: JSON.stringify({
        end_user_id: userId,
        digital_currency: cryptoTicker,
        fiat_currency: fiatTicker,
        requested_currency: fiatTicker,
        requested_amount: parseInt(fiatValue),
        wallet_id: 'cryptospace_api',
        client_ip: clientIp
      })
    };
    
    fetch('https://sandbox.test-simplexcc.com/wallet/merchant/v2/quote', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [fiatValue, clientIp, cryptoTicker, fiatTicker, userId])

  //* Method to manipulate the fiat currency value to exchange
  const handleFiatValue = (event) => {
    setFiatValue(event.target.value)
  }
  
  const handleKeyPress = (event) => {
    //* Prevent input of non-numeric characters
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^\d*$/.test(keyValue) && (event.keyCode !== 8 && event.keyCode !== 46)) {
      event.preventDefault();
    }
  };

  return (currency === 'CRYPTO') ?
    <p className={ styles['simplex__network'] }>{crypto}</p> :
    <input 
      className={ styles['simplex__network'] } 
      disabled={ (fiatTicker === 'CUR') ? true : false }
      onChange={ handleFiatValue }
      onKeyDown={ handleKeyPress }
      pattern='\d*'
      placeholder={ (fiatTicker === 'CUR') ? 'Please select a valid currency' : 'Money to spend' }
    />
}

export default SimplexNetwork
