import Image from 'next/image';
import styles from '../../styles/home.frontpage.module.css';
import global from '../../styles/globals.module.css';
import nft from '../../images/nft-tornasol.png';
import tarjeta from '../../images/tarjetaNft.png';
import cryptospace from '../../images/cryptospace.png';
import opensea from '../../images/opensea.png';
import rarible from '../../images/rarribel.png';
import { useQuery, gql } from '@apollo/client';

const GET_GUMMIES = gql`
  query {
    getGummies(page: 1, pageSize: 100) {
      id
      bioma
      multi
      name
      tokenId
    }
  }
`;
export const FrontPage = () => {
  // const { loading, error, data } = useQuery(GET_GUMMIES, {
  //   variables: { page: 1, pageSize: 100 }
  // });

  const { loading, error, data } = useQuery(GET_GUMMIES)
  console.log(data, loading, error)


  // console.log("My data 2", data, error)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return (
    <div className={ styles.grid }>
      <div className={ styles.section }>
        <h2> We joined the </h2>
        <div className={ styles["title-2-part"] }>
          <Image
            className={ styles.NFT } 
            src={ nft } 
            alt="palabra NFT"  
          />
          <h2> wave. </h2>
        </div>
        <p className={ styles.text }>
          {`Dive into the whimsical world of "TalesFromCryptoSpace" – where every NFT unlocks a unique story. Become a part of our vibrant community, cherish the collection, and let's embark on this digital journey together.`}
        </p>
        <div className={ styles["row-buttons"] }>
          <a
            className={ global.btn }
            href='https://opensea.io/collection/talesfromcryptospace'
            target="_blank"
          >
            <span>View Collection</span>
          </a>
          <a
            className={ global.btn }href='https://nft.cryptospace.global/'
            target="_blank"
          >
            <span>Mint Free Now</span>
          </a>
        </div>
        <div className={ styles["row-companys"] }>
          <Image
            className={ styles.companys } 
            src={ cryptospace } 
            alt="palabra NFT"  
          />
          <Image
            className={ styles.companys } 
            src={ opensea } 
            alt="palabra NFT"  
          />
          <Image
            className={ styles.companys } 
            src={ rarible } 
            alt="palabra NFT"  
          />
        </div>
      </div>
      <Image 
        className={ styles.tarjeta } 
        src={ tarjeta } 
        alt="tarjeta de gomis dorados">
      </Image>
    </div>
  )
}