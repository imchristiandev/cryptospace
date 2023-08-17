import Image from "next/image";
import styles from "../../styles/home.comunity.module.css";
import ososBaqueros from "@/images/osos-baqueros.png";
import global from '../../styles/globals.module.css';

const parrafo_1 = "Our goal is to create an immersive experience for our community through our NFT collection. Each NFT in the collection tells a different story and gives a unique perspective on the world we've created."
const parrafo_2 = " But it's not just about the art and the narrative - our NFTs also serve a practical purpose. They provide utility to our members by unlocking exclusive content and promotions on our platform. By owning one of our NFTs, you'll not only be able to appreciate the art and story, but also gain access to special perks and benefits. Be a part of the story and get your NFT now!" 

export const Comunity = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.contentImg }>
        <Image
          className={ styles.image }
          src={ ososBaqueros }
          alt="Osos baqueros"
        />
      </div>
      <div className={ styles.content }>
        <h2 className={ styles.title }> 
          Quality
        </h2>
        <h2 className={ styles.title }> 
          Reliability 
        </h2>
        <h2 className={ styles.title }> 
          Convenience 
        </h2>
        <p className={ styles.text }>
          { parrafo_1 }
        </p>
        <p className={ styles.text }>
          { parrafo_2 }
        </p>
        <a
            className={ global.btn }
            href='https://discord.gg/WwrQX4dhd4'
            target="_blank"
          >
            <span>Community</span>
          </a>
      </div>
    </div>
  )
}
