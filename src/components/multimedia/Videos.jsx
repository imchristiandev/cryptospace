'use client'

import React, { useState, useRef } from 'react';
import styles from '../../styles/multimedia.video.module.css';
import { variables } from '@/config';


export const Videos = ({ videos }) => {
  const { url_content_video } = variables;
  const [videoRender, setVideoRender] = useState();
  const videoRef = useRef(null);

  const multimedia = (name) => {
    const urlVideo = `${url_content_video}${name}.mp4`;
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
    
    setVideoRender(urlVideo);
  }

  return (
    <div className={ styles.main }>
      <h2> Videos </h2>
      <div className={ styles.content }>
        <div className={ styles.list }>
          <p> Content list </p>
          { videos.map(
            (video) => (
              <a
                key={video}
                onClick={(e) => multimedia(e.target.innerText)}
              >
                {video}
              </a>
          ))}
        </div>
        <div className={ styles.multimediaContent }>
          <video ref={videoRef} controls width="100%" controlsList="nodownload">
            <source src={videoRender} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
