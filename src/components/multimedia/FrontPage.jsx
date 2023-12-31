'use client'

import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../../styles/multimedia.frontpage.module.css';
import globlal from '../../styles/globals.module.css';
import gummy from '@/images/gummy-black.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { Videos } from './Videos';
import { Audios } from './Audios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
  responsive: [
    {
      breakpoint: 800,
      settings: {
        centerMode: false
      }
    }
  ]
};


export const FrontPage = ({ wallet, objects }) => {
  const [content, setContent] = useState(false);
  const [id, setId] = useState([]);

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
                    <a 
                      className={ globlal.btn } 
                      onClick={() => {setId(object.tokenId); setContent(true)}}
                    >
                      Access Multimedia
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
  
        { content ?
          <> 
            <Audios id={id} />
            <Videos id={id} />
            <h2 className={ styles.comic }>The Great Gummy Escape</h2>
            <div className={styles.horizontalGrid}>
              <h3 className={ styles.comicLg }>English Version</h3>
              <a 
                href={`${process.env.URL_COMIC}es.pdf`}  
                download 
                className={styles.comicbutton}
              >
                ⬇ Download Comic
              </a>
            </div>
            <embed 
              src={`${process.env.URL_COMIC}en.pdf#toolbar=0`}
              className={ styles.pdf }
            />
            <h2 className={ styles.comic }>La Gran Huida Gomosa</h2>
            <div className={styles.horizontalGrid}>
              <h3 className={ styles.comicLg }>Version Español</h3>
              <a 
                href={`${process.env.URL_COMIC}es.pdf`}  
                download 
                className={styles.comicbutton}
              >
                ⬇ Descarga Comic
              </a>
            </div>
            <embed 
              src={`${process.env.URL_COMIC}es.pdf#toolbar=0`}
              className={ styles.pdf }
            />
          </>
        : null }
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