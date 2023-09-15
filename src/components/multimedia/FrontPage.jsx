'use client'

import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../../styles/multimedia.frontpage.module.css';
import { Card } from './Card';
import gummy from '@/images/gummy-black.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useRef } from 'react';
import { Videos } from './Videos';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function recortarWallet ( wallet ) {
  const longitud = wallet.length;
  const w1 = wallet.substring(0,4);
  const w2 = wallet.substring(longitud-4,longitud);
  return `${w1}...${w2}`;
};

function generateSlides (objects, setContent, setId) {
  return objects.map((object) => (
    <SwiperSlide key={object.tokenId}>
      <Card
        tokenId = {object.tokenId}
        preview = {object.preview}
        name= {object.name}
        description= {object.description}
        handleSetId= {setId}
        handleSetContent = {setContent}
      />
    </SwiperSlide>
  ))
}
export const FrontPage = ({ wallet, objects }) => {
  const [content, setContent] = useState(false);
  const multimediaRef = useRef(null);
  const [id, setId] = useState([]);

  useEffect(() => {
    const elementPosition = (multimediaRef.current ? multimediaRef.current.offsetTop : 0)
    window.scrollTo(0, elementPosition)
  }, [id])

  const slideList = generateSlides(objects, setContent, setId)

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
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0
                  }
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                loop={true}
              >
                { slideList }
              </Swiper>

            </div>
          </div>
        </div>
  
        { content ?
          <section className={ styles.multimedia } ref={multimediaRef}> 
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
          </section>
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