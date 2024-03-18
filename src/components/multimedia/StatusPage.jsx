import styles from '../../styles/multimedia.statuspage.module.css';
import global from '../../styles/globals.module.css';

export const StatusPage = ({status, onAction}) => {
  if(status === 0)
    return (
      <div className={ styles.main }>
        <div className={ styles.content }>
          <h2 className={ styles.text }>
            Loading ...
          </h2>
        </div>
      </div>
    )

  if(status === 500)
    return (
      <div className={ styles.main }>
        <div className={ styles.content }>
          <h2 className={ styles.text }>
            Metamask not connected
          </h2>
          <a 
            className={ global.btn }
            onClick={() => onAction("login")}
          >
            Login to Metamask
          </a>
        </div>
      </div>
    )

  if(status === 404) // metamask no intalled
    return (
      <div className={ styles.main }>
        <div className={ styles.content }>
          <h2 className={ styles.text }>
            Metamask not installed
          </h2>
          <a 
            className={ global.btn }
          >
            Install metamask
          </a>
        </div>
      </div>
    )

  if(status === 401) // Nfts not found
    return (
      <div className={ styles.main }>
        <div className={ styles.content }>
          <h2 className={ styles.text }>
            Nfts not found
          </h2>
          <a 
            className={ global.btn }
            href='https://nft.cryptospace.global/'
            target="_blank"
          >
            <span>Get my NFT</span>
          </a>
        </div>
      </div>
    )

}
