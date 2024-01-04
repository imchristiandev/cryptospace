import styles from '@/styles/buycrypto.module.css'

const SimplexNetwork = ({ currency, crypto }) => (currency === 'CRYPTO') ?
    <p className={ styles['simplex__network'] }>{crypto}</p> :
    <input type='number' className={ styles['simplex__network'] } placeholder='Money to spend'/>

export default SimplexNetwork
