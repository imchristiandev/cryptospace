import Image from "next/image"
import styles from "../../styles/home.uniqueness.module.css";
import global from '../../styles/globals.module.css';
import nfts from "../../images/nfts-tornasol.png";
import gummyRed from "../../images/gummy-red.png";

const parrafo_1 = "Our NFT collection is truly one-of-a-kind. Not only is it completely free to acquire, but it also grants you exclusive access to exclusive content and promotions on our platform." 
const parrafo_2 = "By owning one of these NFT’s, you will be able to unlock special features and perks that are not available to the general public. Don't miss out on this opportunity to enhance your experience on our platform and own a unique piece of digital art. Get your NFT now!"

export const Uniqueness = () => {
  return (
    <div className= { styles.main }>
      <div className={ styles.colum }>
        <div className={ styles['row-title-part-1'] }>
          <h2> Our </h2>
          <Image
            src={ nfts }
            alt="Nft's"
            className={ styles.nft }
          />
        </div>
        <h2 className={ styles['title-part-2'] }> Uniqueness </h2>
        <p className={ styles.text }>
          {
            `${parrafo_1}
            ${parrafo_2}`
          }
        </p>
        <div className={ styles['row-buttons'] }>
          <a
            className={ global.btn }href='https://nft.cryptospace.global/'
            target="_blank"
          >
            <span>Get my NFT</span>
          </a>
        </div>
      </div>
      <Image 
        className={ styles.image } 
        src={ gummyRed } 
        alt="tarjeta de gomis dorados">
      </Image>
    </div>
  )
}
