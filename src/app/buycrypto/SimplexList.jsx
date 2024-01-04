import styles from '@/styles/buycrypto.module.css'

const SimplexList = ({
    cleanData, 
    currency, 
}) => {
  return (
    <>
    {
        cleanData?.map(data => (currency === 'CRYPTO') ? 
        <div key={`currency-${data.currency}-${data.ticker}`}>{data.ticker} {data.currency}</div> :
        <div key={`currency-${data.ticker}`}>{data.ticker}</div>
        )    
    }
    </>
  )
}

export default SimplexList
