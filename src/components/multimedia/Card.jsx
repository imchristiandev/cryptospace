import Image from "next/image";
import styles from '../../styles/multimedia.frontpage.module.css';
import globlal from '../../styles/globals.module.css';
export const Card = ( { 
  tokenId, 
  preview, 
  name, 
  description, 
  handleSetId, 
  handleSetContent 
}) => {
  return (
    <div className={ styles.backgroundNft } key={ tokenId }>
      <Image 
        src={ preview }
        width={200}
        height={200}
        alt="Picture of the author"
        className={ styles.nft }
      />
      <p className={ styles.name }>{ name }</p>
      <p className={ styles.description }>{ description }</p>
      <a 
        className={ globlal.btn } 
        onClick={() => {handleSetId(tokenId); handleSetContent(true)}}
      >
        Access Multimedia
      </a>
    </div>
  )
}
