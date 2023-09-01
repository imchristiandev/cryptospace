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

async function multimedia (id) {
  const urlApi = process.env.URL_CONTENT_API
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({ id });

  var requestOptionsPOST = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(urlApi, requestOptionsPOST);
    const result = await response.json();
    const arrayNames = result.split(',');
    return arrayNames;
  } catch (error) {
    console.log('error', error);
  }
}

export const FrontPage = ({ wallet, objects }) => {
  const [content, setContent] = useState(false);
  const [data, setData] = useState([])

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
                    onClick={
                      async () => {
                        multimedia(object.tokenId)
                        .then(result => setData(result))
                        .catch(error => console.log(error))
                        setContent(true);
                      }}
                  >
                    ver multimedia
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      { content ?
        <> 
          <Audios audios={data} />
          <Videos videos={data} />
          <h2 className={ styles.comic }>Comic</h2>
          <embed 
            src={`${process.env.URL_COMIC}en.pdf#toolbar=0`}
            className={ styles.pdf }
          />
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