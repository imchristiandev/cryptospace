'use client'

import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../../styles/multimedia.frontpagecountd.module.css';
import gummy from '@/images/gummy-black.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Countdown } from '@/components/multimedia/Countdown';

function recortarWallet ( wallet ) {
  const longitud = wallet.length;
  const w1 = wallet.substring(0,4);
  const w2 = wallet.substring(longitud-4,longitud);
  return `${w1}...${w2}`;
};

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

export const FrontPage = ({ wallet, objects }) => {

  return (
    <div className={ styles.main }>
      <div className={ styles.grid }>
        <Image
          src={ gummy }
          alt="gummy black"
          className={ styles.gummy }
        />
        <div className={ styles['colum-right'] }>
          <h2 className={ styles.title }> Welcome To The Tales of CryptoSpace </h2>
          <div className={ styles.content }>
            <p className={ styles.text }>{ `Wallet Connected: ${ recortarWallet(wallet) }` }</p>
            <h2 className={ styles['sub-title'] }>{"Your NFT's"}</h2>
            <Slider 
              {...settings}
              className={ styles.slider }
            >
              {objects.map((object) => (
                <div className={ styles.backgroundNft } key={ object.tokenId }>
                  <img
                    src={ object.preview }
                    alt={`Nft - ${ object.tokenId }`}
                    className={ styles.nft }
                  />
                  <p className={ styles.name }>{ object.name }</p>
                  <p className={ styles.description }>{ object.description }</p>
                </div>
              ))}
            </Slider>
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  )
};

FrontPage.propTypes = {
  wallet: PropTypes.string.isRequired,
  objects: PropTypes.array.isRequired
};

FrontPage.defaultProps = {
  wallet: '0x000000000000000000000',
};